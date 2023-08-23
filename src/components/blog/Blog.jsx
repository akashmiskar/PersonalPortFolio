import React from 'react';
import './Blog.css';

import Image1 from '../../assets/app.png';

const Blog = () => {
    return (
        <section className="blog container section" id="blog">
            <h2 className="section__title">Latest Posts</h2>

            <div className="blog__container grid">
                <div className="blog__card">
                    <div className="blog__thumb">
                        <a href=""><span className="blog__category">Example</span></a>
                        <a href="https://app.reflexion.ai/" target='_blank' rel='noreferrer'><img src={Image1} alt="" className='blog__img' /></a>
                    </div>
                    <div className="blog__details">
                        <h3 className="blog__title">Reflexion.ai</h3>
                        <div className="blog__meta">
                            <span>01 jan, 2022</span>
                            <span className="blog__dot">.</span>
                            <span>Pune</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Blog