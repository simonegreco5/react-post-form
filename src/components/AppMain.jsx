// sezione import
import { useState } from "react"
import articleList from "../assets/array"

export default function AppMain(){

    const initialArticle = {
        title: '',
        author: '',
        body: '',
        public: ''
    }

    const [articles, setArticles] = useState(articleList)
    const [newArticle, setNewArticle] = useState(initialArticle)


    function submitArticle(e){
        e.preventDefault()

        const newItem = {
            id: Date.now(),
            title: newArticle.title,
            author: newArticle.author,
            body: newArticle.body,
            public: newArticle.public
        }

        setArticles([newItem, ...articles])

    }

    function handleFormArticle(e){
        setNewArticle(
            {
                ...newArticle,
                [e.target.name]: e.target.value
            }
        )
    }

    return(
        <main>
            <div className="container">

                {/* submit form */}
                <form className="row g-3 mt-5" onSubmit={submitArticle}>

                    <div className="col-md-6">
                      <label htmlFor="inputTitle" className="form-label">Title</label>
                      <input name="title" value={newArticle.title} onChange={handleFormArticle} type="text" className="form-control" id="inputTitle" placeholder=" write title of article here" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputAuthor" className="form-label">Author</label>
                      <input name="author" value={newArticle.author} onChange={handleFormArticle} type="text" className="form-control" id="inputAuthor" placeholder="write author of article here" />
                    </div>
                    <div className="col-9">
                      <label htmlFor="inputBody" className="form-label">Address</label>
                      <input name="body" value={newArticle.body} onChange={handleFormArticle} type="text" className="form-control" id="inputBody" placeholder="Write text of your article here"/>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputState" className="form-label">Public Article</label>
                      <input name="public" value={newArticle.public} onChange={handleFormArticle} type="text" id="inputState" className="form-control" placeholder="true or false" />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-success">Add Article</button>
                    </div>

                </form>

                {/* card */}
                {
                    articles.map((item)=>(

                        item.public === true && (

                        <div className="card mt-5" key={item.id}>
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <h6 className="card-subtitle mb-2 text-body-secondary">{item.author}</h6>
                                <p className="card-text">{item.body}</p>
                            </div>
                        </div>

                        )
                    ))
                }

            </div>
        </main>
    )
}