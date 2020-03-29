import React from 'react';
import axios from "axios";

export default class ListaArticles  extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            articles: [],
        }
    }

    getArticles() {

        //Api key inserted from config file
        const apiLink = require("../config.js").NEWSAPI;

        axios
            .get(apiLink)
            .then(res => {
                console.log(res);
                const allArticles = res.data.articles;
                //this.setState({ titles: title });
                console.log(allArticles);
                this.setState({articles: allArticles});
            })
    }

    componentDidMount(){
        this.getArticles();
    }

    render() {
        return(
            <div>
                {this.state.articles.map(article => (
                    <React.Fragment key={article.title}>
                        <a href={article.url} target="#">
                            <div className="articleCard" >
                                <div className="articleImg">
                                    <img className="articleImg" src={article.urlToImage} alt=""/>
                                </div>
                                <ul className="article">
                                    <li className="articleTitle"> {article.title} </li>
                                </ul>
                         </div>
                         </a>
                    </React.Fragment>
                ))}
            </div>
        )
    }

}

//Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>

/* 
    <div>
                <ul className="titleList">
                    {this.state.articles.map(article => <li key={article.title}>{ article.title, article.description } </li>)}
                                
                </ul>
            </div>

            <a href={article.url} target="#" className="articleURL">Zum Artikel</a>

            <li className="articleDescription"> {article.description} </li>
*/