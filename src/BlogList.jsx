const BlogList = ({ blogs, title, handleDelete }) => {
    return (
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.length ? (
                blogs.map((blog) => (
                    <div className="blog-preview" key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>Written by {blog.author}</p>
                        <button onClick={() => handleDelete(blog.id)}>Delete blog</button>
                    </div>
                ))
            ) : (
                <p>No blogs to display</p>
            )}
        </div>
    );
}

export default BlogList;