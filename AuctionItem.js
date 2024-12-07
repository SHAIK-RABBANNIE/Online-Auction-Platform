
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './AuctionItem.css';
import { useNavigate } from 'react-router-dom';
const AuctionItem = () => {
    const { id } = useParams();
    
    // Complete list of auction items with descriptions
    const auctionItems = [
        { id: 1, name: 'Antique Vase',description: 'An antique vase is a decorative object that often reflects the artistic, cultural, and historical aspects of the era and region from which it originated. Made from materials such as porcelain, ceramic, glass, or metal, these vases can range from simple, functional items to highly intricate, ornamental pieces. The design often features hand-painted motifs or carvings, depicting natural scenes, mythological figures, or geometric patterns. Its aged appearance, including patina, chips, or cracks, adds to its charm and authenticity.', image: 'https://tse4.mm.bing.net/th?id=OIP.xgP2g_FJY5vMjjfI3DsDXAHaJ4&pid=Api&P=0&h=180' },
        { id: 2, name: 'Vintage Watch', description: 'A vintage watch is a timepiece that is typically several decades old and reflects the design, craftsmanship, and technology of its era. These watches are admired for their classic aesthetics, mechanical precision, and the nostalgia they evoke, often serving as collectible items or heirlooms.\n\nVintage watches can be mechanical (either hand-wound or automatic) or quartz-powered, depending on when they were made. Their cases are usually crafted from materials like stainless steel, gold, or even platinum, with some featuring intricate engravings or decorations. The dials of vintage watches often show a unique patina over time, adding to their charm. Depending on the brand and style, the watch may have numerals or indices, often complemented by elegant hands that are shaped in various designs, such as dauphine, cathedral, or sword hands.\n\nBrands like Rolex, Omega, and Patek Philippe are renowned for their iconic vintage models, which often exhibit meticulous attention to detail. These watches might include complications like date windows, chronographs, or moon phases, all skillfully integrated into their design.\n\nStraps on vintage watches can be leather, metal bracelets, or occasionally canvas, each contributing to the overall aesthetic. The watch crystal may be made from acrylic, mineral glass, or sapphire, with some showing minor scratches or wear over time.\n\nA vintage watch not only tells time but also tells a story—capturing the essence of a bygone era with its design, craftsmanship, and heritage. Collectors often seek out these watches for their rarity, beauty, and the prestige associated with owning a piece of horological history.', image: 'https://cdn.pixabay.com/photo/2014/12/08/14/23/pocket-watch-560937_1280.jpg' },
        { id: 3, name: 'Painting by Artist A', description: 'A rare coin is a valuable and often highly sought-after collectible due to its scarcity, historical significance, and unique characteristics. These coins are typically from past eras or special mintings, making them precious to numismatists (coin collectors) and history enthusiasts alike.\n\n### Material and Composition:\nRare coins can be made from various materials, including gold, silver, copper, nickel, or alloys. The metal content often adds to the value, particularly in coins made from precious metals like gold or silver. The weight and purity of the metal are also important factors, especially in ancient or early modern coins.\n\n### Historical Significance:\nOne of the most attractive aspects of a rare coin is its connection to a specific historical period or event. For example, coins from ancient civilizations like the Roman Empire, ancient Greece, or China offer a tangible link to past societies. Rare coins might also commemorate important milestones, such as royal coronations, military victories, or national independence. Some coins are associated with significant political or economic events, making them symbols of a particular era.\n\n### Design and Symbols:\nThe design of a rare coin typically features detailed engravings, often depicting notable figures like kings, queens, political leaders, or deities. The reverse side may showcase national symbols, animals, or intricate patterns. Some rare coins include unique or unusual minting errors, which can increase their value due to their rarity. These errors could involve misaligned prints, double strikes,  Age and Condition:\nThe age of a coin plays a significant role in its rarity. Coins that are centuries old, such as those from the ancient world or early medieval periods, are prized for their longevity and survival. However, the condition is equally important—coins in excellent condition (graded as "mint" or "uncirculated") tend to be worth more, though even coins with visible wear can be valuable if they are extremely rare.\n\n### Rarity and Minting Numbers:\nA rare coin may have been minted in limited quantities or for a short period, adding to its scarcity. Some coins were produced as limited-edition releases, while others might be rare due to low survival rates over time. Mint marks (small symbols or letters indicating where the coin was minted) can further distinguish a rare coin, as certain mint locations produced fewer coins.\n\n### Value and Collectibility:\nRare coins are often highly valuable, with their worth determined by factors such as age, condition, material, historical importance, and rarity. Collectors and investors value these coins not only for their beauty and craftsmanship but also for their potential to appreciate in value over time. Coins that have been authenticated and graded by reputable organizations, like the Numismatic Guaranty Corporation (NGC) or Professional Coin Grading Service (PCGS), can command higher prices at auction or in private sales.\n\n### Examples of Rare Coins:\n- The 1933 Saint-Gaudens Double Eagle: A famous U.S. gold coin, with only a few known surviving examples.\n- Ancient Greek Tetradrachms: Coins from the ancient world featuring gods and rulers.\n- Roman Aureus: Gold coins from the Roman Empire, often depicting emperors.\n- The 1804 Silver Dollar: Known as the "King of American Coins," it is one of the rarest U.S. coins.\n\nIn summary, a rare coin is much more than a form of currency; it is a piece of history, art, and craftsmanship, cherished by collectors for its uniqueness and cultural significance.',image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZ9tziYEz8HYQywSaQBjSd6cGd-tUHDg_yAQ&sv' },
        { id: 4, name: 'Rare Coin',description: `A rare coin from the 19th century, highly sought after by collectors due to its scarcity, historical significance, and unique characteristics. This coin is made from high-quality silver and features intricate engravings of historical figures. It has been well-preserved, with visible signs of age that add to its charm and value. Collectors will appreciate its connection to a specific historical period, making it a prized addition to any collection.`, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQVo15uk7ND1-i4n0frzvPNmbayO_U3m4B2w&s' },
        { id: 5, name: 'Classic Car Model',description: `A meticulously crafted model of a classic car, ideal for display. This model captures the essence of iconic automotive design from a bygone era, with sleek body shapes, flowing lines, and chrome accents. It reflects the timeless beauty and craftsmanship of classic cars, offering a detailed representation of mechanical innovation. Whether you admire the raw driving experience or the aesthetics of vintage vehicles, this classic car model is perfect for any car enthusiast or collector.`, image: 'https://cdn11.bigcommerce.com/s-tw31ku0q8q/images/stencil/500x659/products/8164/66660/RND25317-1__58979.1684528425.jpg?c=2' },
        { id: 6, name: 'Collectible Action Figure', description:'The collectible action figure community also includes fans who customize or "mod" their figures, adding new paint jobs, swapping parts, or even creating entirely new figures from existing ones. Star Wars Action Figures (Kenner, 1970s-1980s): Early Star Wars figures remain among the most famous and collectible toys, with rare versions like the vinyl cape Jawa or rocket-firing Boba Fett being especially valuable.Batman: The Animated Series Figures (DC Collectibles): Figures based on the beloved 1990s cartoon are cherished for their faithful design and iconic status.In summary, a collectible action figure is more than just a toy—it’s a highly detailed, carefully crafted piece of memorabilia that celebrates beloved characters and franchises. Whether displayed in a collection or kept sealed for investment purposes, these figures are a reflection of pop culture history, creativity, and craftsmanship.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkqQzqm3ME3xH5hyCGRNLtw_Zv-sdvf5A2fw&s' },
        { id: 7, name: 'Handcrafted Jewelry', description: 'Handcrafted jewelry refers to pieces of adornment that are meticulously made by skilled artisans using traditional techniques, often without the use of mass-production machinery. Each piece is unique, reflecting the creativity, craftsmanship, and attention to detail of the maker.Handcrafted jewelry is valued not only for its aesthetic appeal but also for the artistry and personal touch that goes into its creation.Materials:Handcrafted jewelry is made from a wide range of materials, including precious metals like gold, silver, and platinum, as well as semi-precious and non-precious metals such as copper and brass. Artisans also incorporate gemstones, crystals, pearls, wood, beads, and organic materials like leather or shells. The selection of materials is often based on the artists vision, as well as cultural or symbolic significance.', image: 'https://img2.exportersindia.com/product_images/bc-full/dir_55/1640974/hand-made-jewellery-415541.jpg' },
        { id: 8, name: 'Old Comic Book', description: 'Old comic books, often referred to as "Golden Age" and "Silver Age" comics, have a rich history and distinct characteristics. The "Golden Age" (1938-1956) marks the birth of the superhero genre, with characters like Superman, Batman, and Wonder Woman making their first appearances. These comics typically featured bold, primary colors, simple artwork, and straightforward storytelling, often focusing on themes of heroism, patriotism, and morality.The "Silver Age" (1956-1970) saw the evolution of the superhero genre, with a more sophisticated approach to storytelling and character development. Key figures from this era include Spider-Man, the Fantastic Four, and the X-Men. The art became more detailed, with dynamic action sequences and complex plots that delved into social issues, science fiction, and personal struggles.Old comic books were printed on cheap, pulpy paper, which gives them a distinctive texture and aged look. The artwork was often characterized by thick black lines and flat colors due to the limited printing technology of the time. These comics were originally sold for just a few cents, and today, they are prized by collectors for their historical significance, rarity, and cultural impact.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTDQI_jaYKV-rKTyMEiwHZCwmGWOzaOff119Q&s' },
        { id: 9, name: 'Music Vinyl Record', description: 'A vinyl record, also known as a phonograph record or simply a record, is a medium used for storing analog sound. Vinyl records are typically made of polyvinyl chloride (PVC) and have grooves that are engraved in a spiral pattern, starting from the outer edge and continuing to the center. The grooves contain variations that correspond to the sound waves of the music, which are read by a needle (stylus) on a turntable.- Vinyl records provide analog sound, which is considered to produce a warmer, richer tone compared to digital formats. This is because vinyl records capture sound in its continuous wave form, as opposed to digitals discrete samples.Vinyl records often come with large, detailed cover art and liner notes, making them prized by collectors and music enthusiasts.- Limited edition pressings, colored vinyl, and picture discs are also part of the appeal for collectors.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcpDmHcSzF92HsKzSAt5B0tr2iZ7EkU7hDLQ&s' },
        { id: 10, name: 'Sculpture by Artist B', description: 'An elegant sculpture created by renowned artist B.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDbDk9goU54NnvprEw6V0vqgDZB58eW0vcmg&s' },
        { id: 11, name: 'Antique Furniture', description: 'Elegant antique furniture that adds a touch of history to any room.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmBgwVn6fWnX8ZdCjuT-ObgCHfN8QPhS3toQ&s' },
        { id: 12, name: 'Signed Sports Jersey', description: 'A signed jersey from a legendary athlete, perfect for fans.', image: 'https://www.shoprsa.com/cdn/shop/files/IMG_6344_512x512.jpg?v=1723738462' },
        { id: 13, name: 'Vintage Guitar', description: 'A vintage guitar with a rich sound and beautiful design.', image: 'https://www.garysguitars.com/sites/default/files/styles/uc_product_full/public/FEE0963_bodft.jpg?itok=aZzUaN_r' },
        { id: 14, name: 'Historical Document', description: 'A rare historical document with significant cultural value.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7oej2l4KdJHr1UAAFR-cjmxroVWPHFxVW7w&s' },
        { id: 15, name: 'Mid-Century Modern Chair', description: 'A stylish mid-century modern chair that is both comfortable and chic.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRnvxCpvQ9CNl-Xy2eItMN_RxvMVxeSiRsXLg&s' },
        { id: 16, name: 'Old Map', description: 'An ancient map that showcases historical geography.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSRD7_9x5fWBpRQZMc_O8X8SvUCSh0g6FCJw&s' },
        { id: 17, name: 'Limited Edition Watch', description: 'A luxury watch available in a limited edition, combining style and function.', image: '' },
        { id: 18, name: 'Art Deco Lamp', description: 'A stunning Art Deco lamp that brightens any space with elegance.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQahjPS_AgrpjiH481uswMxJWKXwSZzRgEn2Q&s' },
        { id: 19, name: 'Rare Stamp Collection', description: 'A rare collection of stamps from around the world, perfect for collectors.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCklH_NYJ5Iro2jSa7kf2wBYZRDM29OlaONQ&s' },
        { id: 20, name: 'Designer Handbag', description: 'A high-fashion designer handbag that is a must-have for fashion enthusiasts.', image: 'https://t3.ftcdn.net/jpg/08/33/19/80/360_F_833198089_SmoxQ07QP8okI0omJvSZrAAvjbcZRLDF.jpg' },
        { id: 21, name: 'Luxury Perfume', description: 'A luxury perfume that captivates the senses with its unique fragrance.', image: 'https://png.pngtree.com/thumb_back/fw800/background/20240430/pngtree-beautiful-luxury-perfume-for-man-and-women-image_15722846.jpg' },
        { id: 22, name: 'Fossilized Dinosaur Bone', description: 'A genuine fossilized dinosaur bone, a true treasure for enthusiasts.', image: 'https://cdn11.bigcommerce.com/s-8nvs2trnzz/images/stencil/1280x1280/products/669/1089/2571__31949.1695096615.jpg?c=1' },
        { id: 23, name: 'Signed Movie Poster', description: 'A signed poster from a classic film, perfect for movie buffs.', image: '' },
        { id: 24, name: 'Exotic Fish Tank', description: 'A beautifully designed fish tank that showcases exotic fish.', image: '' },
        { id: 25, name: 'Vintage Typewriter', description: 'A classic vintage typewriter that adds nostalgia to any workspace.', image: 'https://theartarium.com/cdn/shop/files/DSC_7552_2.webp?v=1715848833' },
        { id: 26, name: 'Limited Edition Sneakers', description: 'Stylish limited edition sneakers that are perfect for collectors.', image: 'https://images.unsplash.com/photo-1597801230970-6d905c0f7be1' },
        { id: 27, name: 'Classic Film Camera', description: 'A classic film camera that captures moments beautifully.', image: 'https://cdn.pixabay.com/photo/2013/11/28/10/02/camera-219958_1280.jpg' },
        { id: 28, name: 'Handmade Quilt', description: 'A beautiful handmade quilt that is both functional and decorative.', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCu81g2L4BpRAIuX5SHRwdF4BulZ0GNZUAqA&s' },
    ];
    const auctionItem = auctionItems.find(item => item.id === parseInt(id));
    
    // State to manage registration form visibility
    const [isFormVisible, setFormVisible] = useState(false);
    const [bidAmount, setBidAmount] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    // Use the navigate hook to redirect to the payment page
    const navigate = useNavigate();

    // Toggle registration form visibility
    const toggleFormVisibility = () => {
        setFormVisible(prevState => !prevState);
    };

    const handleBidSubmit = (event) => {
        event.preventDefault();

        // Check if the bid amount is valid
        if (parseFloat(bidAmount) < 1000) {
            setErrorMessage('Bid amount must be at least $1000');
        } else if (bidAmount) {
            // Navigate to the payment page with the bid details
            navigate('/payment', { state: { product: auctionItem, bidAmount } });
            setBidAmount('');
            setFormVisible(false);
            setErrorMessage('');
        } else {
            alert('Please enter a bid amount.');
        }
    };

    return (
        <div className="auction-item-details">
            {auctionItem ? (
                <>
                    <h1>{auctionItem.name}</h1>
                    <img src={auctionItem.image} alt={auctionItem.name} />
                    <p>{auctionItem.description}</p>
                    <button id="registerButton" onClick={toggleFormVisibility}>
                        Bid Now
                    </button>
                    {isFormVisible && (
                        <div id="registrationForm">
                            <h2>Enter Your Bid</h2>
                            <form onSubmit={handleBidSubmit}>
                                <label htmlFor="bidAmount">Bid Amount:</label>
                                <input
                                    type="number"
                                    id="bidAmount"
                                    name="bidAmount"
                                    value={bidAmount}
                                    onChange={(e) => setBidAmount(e.target.value)}
                                    required
                                    min="1"
                                    placeholder="Enter your bid amount"
                                />
                                <br />
                                {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
                                <button type="submit">Submit Bid</button>
                            </form>
                        </div>
                    )}
                </>
            ) : (
                <p>Auction item not found.</p>
            )}
        </div>
    );
};

export default AuctionItem;