import { usestate } from 'react';

const About = () => {
    const[blogs, setBlogs] = usestate([
        {title: 'My new website', body: 'Body like tea', author: 'mario', id: '1'},
        {title: 'welcome to party', body: 'Body like tea', author: 'yoshi', id: '2'},
        {title: 'web developer top tips', body: 'normally', author: 'Elijah', id: '3'}
    ]);
    return (
        <div className='About'>
            {blogs.map((blog) => (
                <div className="blog-preview"key={blog.id}> 
                    <h1>{ blog.title }</h1>
                    <p>Writting by { blog.author }</p>
                </div>
            ))}
        </div>
    );
}
 
export default About;