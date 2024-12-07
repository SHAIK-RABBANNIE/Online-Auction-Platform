import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const auctionItems = [
    { id: 1, name: 'Antique Vase', image: 'https://tse4.mm.bing.net/th?id=OIP.xgP2g_FJY5vMjjfI3DsDXAHaJ4&pid=Api&P=0&h=180'},
    { id: 2, name: 'Vintage Watch', image: 'https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_1280.jpg' },
    { id: 3, name: 'Painting by Artist A', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9tziYEz8HYQywSaQBjSd6cGd-tUHDg_yAQ&sv' },
    { id: 4, name: 'Rare Coin', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVo15uk7ND1-i4n0frzvPNmbayO_U3m4B2w&s' },
    { id: 5, name: 'Classic Car Model', image: 'https://cdn11.bigcommerce.com/s-tw31ku0q8q/images/stencil/500x659/products/8164/66660/RND25317-1__58979.1684528425.jpg?c=2' },
    { id: 6, name: 'Collectible Action Figure', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqQzqm3ME3xH5hyCGRNLtw_Zv-sdvf5A2fw&s' },
    { id: 7, name: 'Handcrafted Jewelry', image: 'https://img2.exportersindia.com/product_images/bc-full/dir_55/1640974/hand-made-jewellery-415541.jpg' },
    { id: 8, name: 'Old Comic Book', image: 'https://tse2.mm.bing.net/th?id=OIP.uuUqAiN3rYP2RMQDSfhpAgHaHa&pid=Api&P=0&h=180' },
    { id: 9, name: 'Music Vinyl Record', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpDmHcSzF92HsKzSAt5B0tr2iZ7EkU7hDLQ&s' },
    { id: 10, name: 'Sculpture by Artist B', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbDk9goU54NnvprEw6V0vqgDZB58eW0vcmg&s' },
    { id: 11, name: 'Antique Furniture', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBgwVn6fWnX8ZdCjuT-ObgCHfN8QPhS3toQ&s' },
    { id: 12, name: 'Signed Sports Jersey', image: 'https://www.shoprsa.com/cdn/shop/files/IMG_6344_512x512.jpg?v=1723738462' },
    { id: 13, name: 'Vintage Guitar', image: 'https://www.garysguitars.com/sites/default/files/styles/uc_product_full/public/FEE0963_bodft.jpg?itok=aZzUaN_r' },
    { id: 14, name: 'Historical Document', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oej2l4KdJHr1UAAFR-cjmxroVWPHFxVW7w&s' },
    { id: 15, name: 'Mid-Century Modern Chair', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvxCpvQ9CNl-Xy2eItMN_RxvMVxeSiRsXLg&s' },
    { id: 16, name: 'Old Map', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRD7_9x5fWBpRQZMc_O8X8SvUCSh0g6FCJw&s' },
    { id: 17, name: 'Limited Edition Watch', image: 'https://tse3.mm.bing.net/th?id=OIP.Z8u_oyNJfOeDXW5-3cg8jgHaFj&pid=Api&P=0&h=180' },
    { id: 18, name: 'Art Deco Lamp', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahjPS_AgrpjiH481uswMxJWKXwSZzRgEn2Q&s' },
    { id: 19, name: 'Rare Stamp Collection', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCklH_NYJ5Iro2jSa7kf2wBYZRDM29OlaONQ&s' },
    { id: 20, name: 'Designer Handbag', image: 'https://t3.ftcdn.net/jpg/08/33/19/80/360_F_833198089_SmoxQ07QP8okI0omJvSZrAAvjbcZRLDF.jpg' },
    { id: 21, name: 'Luxury Perfume', image: 'https://tse2.mm.bing.net/th?id=OIP.6EkNMvJuvJ2qTwLjOEB6fwHaJG&pid=Api&P=0&h=180' },
    { id: 22, name: 'Fossilized Dinosaur Bone', image: 'https://tse1.mm.bing.net/th?id=OIP.Gj8hp-u9FUgtdnNlvqWdjgHaFj&pid=Api&P=0&h=180' },
    { id: 23, name: 'Signed Movie Poster', image: 'https://cdn11.bigcommerce.com/s-8nvs2trnzz/images/stencil/1280x1280/products/669/1089/2571__31949.1695096615.jpg?c=1' },
    { id: 24, name: 'Exotic Fish Tank', image: 'https://tse3.mm.bing.net/th?id=OIP.oYFQKo2xDekZdVa4T-HM6wHaGC&pid=Api&P=0&h=180' },
    { id: 25, name: 'Vintage Typewriter', image: 'https://theartarium.com/cdn/shop/files/DSC_7552_2.webp?v=1715848833' },
    { id: 26, name: 'Limited Edition Sneakers', image: 'https://tse3.mm.bing.net/th?id=OIP.4l7wVJj7BpW5V09OcbX0QQAAAA&pid=Api&P=0&h=180' },
    { id: 27, name: 'Classic Film Camera', image: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg' },
    { id: 28, name: 'Handmade Quilt', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCu81g2L4BpRAIuX5SHRwdF4BulZ0GNZUAqA&s' },
];

const Home = () => {
    return (
        <div className="home-container">
            <nav className="navbar">
                <ul>
                    <li>
                        <a href="https://forms.gle/TWaBzWnwkxTmK2tp8" target="_blank" rel="noopener noreferrer">
                            Auction Registration
                        </a>
                    </li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/Calendar">Calendar</Link></li>
                    <li><Link to="/BidCancellation">BidCancellation</Link></li>
                    <li><Link to = "/AboutUs">AboutUs</Link></li>
                    <li><Link to = "/Verification">Verification</Link></li>
                    
                    <li><Link to = "/MyBids">MyBids</Link></li>
                    <li><Link to = "/Admin">Admin</Link></li>
                    <li><Link to="/logout">Logout</Link></li> {/* Updated link */}
                </ul>
            </nav>

            <h1>Welcome to the Home Page</h1>
            <p>You have successfully logged in!</p>

            <h2>Auction Items</h2>
            <div className="auction-items">
                {auctionItems.map(item => (
                    <div key={item.id} className="auction-item">
                        <Link to={`/auction-item/${item.id}`}>
                            <img src={item.image} alt={item.name} />
                        </Link>
                        <p>{item.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Home;
