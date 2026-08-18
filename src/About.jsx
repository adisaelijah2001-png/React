import { useState } from 'react';
import BlogList from './BlogList';

const About = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Body like tea', author: 'mario', id: '1'},
        {title: 'welcome to party', body: 'Body like tea', author: 'yoshi', id: '2'},
        {title: 'web developer top tips', body: 'normally', author: 'mario', id: '3'}
    ]);

const handleDelete = (id) =>{
    const newBlogs = blogs.filter(blog => blog.id !== id)
    setBlogs(newBlogs);
}

    return (
        <div className='About'>
           <BlogList blogs={blogs} title="All blogs" handleDelete={handleDelete} />
        </div>
    );
}
 
export default About;