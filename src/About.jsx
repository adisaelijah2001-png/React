import { useState } from 'react';
import BlogList from './BlogList';

const About = () => {
    const [blogs, setBlogs] = useState([
        {title: 'My new website', body: 'Body like tea', author: 'mario', id: '1'},
        {title: 'welcome to party', body: 'Body like tea', author: 'yoshi', id: '2'},
        {title: 'web developer top tips', body: 'normally', author: 'mario', id: '3'}
    ]);
    return (
        <div className='About'>
           <BlogList blogs={blogs} title="All blogs" />
           <BlogList blogs={blogs.filter((blog) => blogs.authour === 'mario')} title="mario blogs" />
        </div>
    );
}
 
export default About;