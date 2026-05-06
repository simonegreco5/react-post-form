// sezione import
import { useState } from "react"
import articleList from "../assets/array"

export default function AppMain(){

    const [articles, setArticles] = useState(articleList)

    return(
        <main>
            <div className="container">

                {/* submit form */}
                <form className="row g-3 mt-5">

                    <div className="col-md-6">
                      <label htmlFor="inputTitle" className="form-label">Title</label>
                      <input type="text" className="form-control" id="inputTitle" placeholder=" write title of article here" />
                    </div>
                    <div className="col-md-6">
                      <label htmlFor="inputAuthor" className="form-label">Author</label>
                      <input type="text" className="form-control" id="inputAuthor" placeholder="write author of article here" />
                    </div>
                    <div className="col-9">
                      <label htmlFor="inputBody" className="form-label">Address</label>
                      <input type="text" className="form-control" id="inputBody" placeholder="Write text of your article here"/>
                    </div>
                    <div className="col-md-3">
                      <label htmlFor="inputState" className="form-label">Public</label>
                      <select id="inputState" className="form-select">
                        <option value="">Choose</option>
                        <option value="">true</option>
                        <option value="">false</option>
                      </select>
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