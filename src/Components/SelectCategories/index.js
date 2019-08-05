import React from 'react';
import './index.css';

class Categories extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            formInput: '',
            categories: [
                {
                    name: 'restaurant',
                    path: 'Restaurant/',
                },
                {
                    name: 'bar',
                    path: 'Beauty & Wellness/',
                },
                {
                    name: 'cafe',
                    path: 'Professionals & Services/',
                },
                ],
            fetchData: [],
            selectedCategories: [],
            inputValidity: ""
        }
    }

    eventHandler = (event) => {
        this.setState({formInput: event.target.value.toLowerCase()})
    };
    //input search avoid wrong category
    categoryExist = () => {
        const { formInput, categories } = this.state;
        let bool;
        for (let i=0; i < categories.length; i++){
            if (categories[i].name == formInput){
                return bool = true
            } else {
                bool = false
            };
        } 
        return bool
    }
    //input search avoid category resubmission
    categoryNotSelected = () => {
        const { formInput, selectedCategories } = this.state;
        let bool;
        for (let i=0; i < selectedCategories.length; i++){
            if (selectedCategories[i].name == formInput){
                return bool = false
            } else {
                bool = true
            };
        } 
        return bool
    }
    
    handleSubmit = (event) => {
        event.preventDefault()
        const { formInput, selectedCategories, categories, inputValidity } = this.state;
        //input validation + fetch
        if (this.categoryExist() && (this.categoryNotSelected() || selectedCategories.length == 0)){
            fetch(`https://api.centralapp.com/api/v1/categories/like?search=${formInput}`)
            .then(response => response.json())
            .then(data => {
                this.setState({ fetchData: data })
            });
            //remove category from search
            const category = categories.filter(elem => elem.name == formInput)
            //add category to the list + validation message
            selectedCategories.push(category[0]);
            const newArr = categories.filter((elem, index) => elem.name !== formInput )
            this.setState({
                categories: newArr,
                formInput: '',
                inputValidity: "valid"
            })
        } else {
            this.setState({
                inputValidity: "invalid"
            })
        }
    }
    //delete category from list
    handleDelete = (category) => {
        const { selectedCategories, categories } = this.state;
        const newArr = selectedCategories.filter((elem, index) => elem.name !== category.name);
        // adding category back to search input datalist
        this.setState({ selectedCategories: newArr})
        categories.push(category)
    }

    render(){
        const { categories, selectedCategories, formInput, inputValidity } = this.state;
        const list = categories.map((elem, index) => (
            <option key={index.toString} value={elem.name}>{elem.name}</option>
        ))
        const selected = selectedCategories.map((elem) => (
            <tr>
                <td>{elem.name}</td>
                <td>{elem.path}</td>
                <td><button onClick={() => this.handleDelete(elem)}>X</button></td>
            </tr>
        ))
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label for="category-search">Search a category: </label>
                    <input list="categories" className="categories" value={formInput} onChange={this.eventHandler} autoComplete="off"/>
                    {formInput.length > 2 &&
                    <datalist id="categories" className="categories-item">
                        {list}
                    </datalist>
                    }
                <input type="submit" className="submit" value="Search" />
                { inputValidity.length > 0 &&
                <span className={inputValidity}></span>
                }
                </form>
                { selectedCategories.length > 0 &&
                <table>
                    <tr>
                        <th>Category</th>
                        <th>Path</th>
                        <th></th>
                    </tr>
                    {selected}
                </table>
                }
            </React.Fragment>
        )
    }
}

export default Categories;