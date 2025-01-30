import React from 'react'
import "./Blog.css"
import { Link } from 'react-router-dom'
import Blog1 from "../../assets/Blog1.svg"
import Blog2 from "../../assets/Blog2.svg"
import Blog3 from "../../assets/Blog3.svg"
import Blog4 from "../../assets/Blog4.svg"

const Blog = () => {
    return (
        <div>
            <div class="blog-section">
                <h2>Our Blog Posts</h2>
                <p>We are an online plant shop offering a wide range of cheap and trendy plants.</p>
                <div class="blog-grid">
                    <div class="blog-card">
                        <img src={Blog1} alt="Cactus & Succulent Care Tips" />
                        <div class="blog-content">
                            <p class="date">September 12 | Read in 6 minutes</p>
                            <h3>Cactus & Succulent Care Tips</h3>
                            <p>Cacti are succulents and easy care plants for any home or patio.</p>
                            <Link href="#" class="read-more">Read More →</Link>
                        </div>
                    </div>
                    <div class="blog-card">
                        <img src={Blog2} alt="Top 10 Succulents for Your Home" />
                        <div class="blog-content">
                            <p class="date">September 13 | Read in 2 minutes</p>
                            <h3>Top 10 Succulents for Your Home</h3>
                            <p>Best in hanging baskets. Prefers medium to high light.</p>
                            <Link  class="read-more">Read More →</Link>
                        </div>
                    </div>
                    <div class="blog-card">
                        <img src={Blog3} alt="Cacti & Succulent Care Tips" />
                        <div class="blog-content">
                            <p class="date">September 15 | Read in 3 minutes</p>
                            <h3>Cacti & Succulent Care Tips</h3>
                            <p>Cacti and succulents thrive in containers and because most are...</p>
                            <Link href="#" class="read-more">Read More →</Link>
                        </div>
                    </div>
                    <div class="blog-card">
                        <img src={Blog4} alt="Best Houseplants Room By Room" />
                        <div class="blog-content">
                            <p class="date">September 15 | Read in 2 minutes</p>
                            <h3>Best Houseplants Room By Room</h3>
                            <p>The benefits of houseplants are endless. In addition to...</p>
                            <Link href="#" class="read-more">Read More →</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blog
