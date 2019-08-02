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
                    disabled: ''
                },
                {
                    name: 'bar',
                    path: 'Beauty & Wellness',
                    disabled: ''
                },
                {
                    name: 'cafe',
                    path: 'Professionals & Services',
                    disabled: '',
                },
                ],
            fetchData: [],
            selectedCategories: []
        }
    }

    eventHandler = (event) => {
        this.setState({category: event.target.value})
    };

    handleSubmit = (event) => {
        event.preventDefault()
        const { formInput, categories, selectedCategories } = this.state;
        const name = formInput;
        fetch(`https://api.centralapp.com/api/v1/categories/like?search=${name}`)
          .then(response => response.json())
          .then(data => {
              this.setState({ fetchData: data })
          });
        selectedCategories.push(name);
        const newArr = categories.map((elem, index) => {
            if (elem.name == name){
                elem.disabled = "disabled"
                return elem
            } 
            return elem
        })
        this.setState({categories: newArr})
    }

    handleClick = (category) => {
        const { selectedCategories, categories } = this.state;
        const newArr = selectedCategories.filter((elem, index) => elem !== category);
        this.setState({ selectedCategories: newArr})
        const newList = categories.map((elem, index) => {
            if (elem.name == category){
                elem.disabled = ""
                return elem
            } 
            return elem
        })
        this.setState({categories: newList})
    }

    render(){
        const { categories, selectedCategories } = this.state;
        const list = categories.map((elem, index) => (
            <option key={index.toString} value={elem.name} disabled={elem.disabled}>{elem.name}</option>
        ))
        const selected = selectedCategories.map((elem, index) => (
            <tr>
                <td>{elem}</td>
                <td></td>
                <td><button onClick={() => this.handleClick(elem)}>X</button></td>
            </tr>
        ))
        return(
            <React.Fragment>
                <form onSubmit={this.handleSubmit}>
                    <label for="category-search">Search a category: </label>
                    <input list="categories" name="categories" value={this.state.name} onChange={this.eventHandler}/>
                    <datalist id="categories">
                        {list}
                    </datalist>
                <input type="submit" value="Search" />
                </form>
                <tr>
                    <th>Category</th>
                    <th>Path</th>
                    <th>Delete</th>
                </tr>
                <tbody>
                    {selected}
                </tbody>
            </React.Fragment>
        )
    }
}

export default Categories;