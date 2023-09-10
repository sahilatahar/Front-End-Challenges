import './RecipePage.scss'
import dotSVG from '../assets/6dots.svg';
import img from '../assets/photo1.png';
import foodIcon from '../assets/food.svg';
import timeIcon from '../assets/time.svg';
import { ingredients, instructions } from '../data/recipeData';

function RecipePage() {

    return (
        <div className="RecipePage">
            <h1 className='RecipePage__title'>Classic Cheesecake Recipe</h1>
            <div className="RecipePage__subtitle">
                <img src={dotSVG} alt="" className='subtitle__svg' />
                <p className='subtitle__content'>Look no further for a creamy and ultra smooth classic cheesecake recipe! Paired with a buttery graham cracker crust, no one can deny its simple decadence. For the best results, bake in a water bath.</p>
            </div>
            <div className="RecipePage__image">
                <img src={img} alt="Image" />
            </div>
            <main>
                <div className="RecipePage__info">
                    <div className="RecipePage__info-item">
                        <span className='icon'>
                            <img src={foodIcon} alt="food icon" />
                        </span>
                        <span className="content">
                            <p className='content__title'>Yields</p>
                            <p className='content__data active'>12 servings</p>
                        </span>
                    </div>
                    <div className="RecipePage__info-item">
                        <span className='icon'>
                            <img src={timeIcon} alt="food icon" />
                        </span>
                        <span className="content">
                            <p className='content__title'>Prep TIme</p>
                            <p className='content__data'>45 minutes</p>
                        </span>
                    </div>
                    <div className="RecipePage__info-item">
                        <span className='icon'>
                            <img src={timeIcon} alt="food icon" />
                        </span>
                        <span className="content">
                            <p className='content__title'>Cook Time </p>
                            <p className='content__data'>1 hour</p>
                        </span>
                    </div>
                    <div className="RecipePage__info-item">
                        <span className='icon'>
                            <img src={timeIcon} alt="food icon" />
                        </span>
                        <span className="content">
                            <p className='content__title'>Total Time</p>
                            <p className='content__data'>7,75 hours</p>
                        </span>
                    </div>
                </div>
                <div className="RecipePage__content">
                    <div className="RecipePage__content__ingredients">
                        <h2 className='ingredients__title'>Ingredients</h2>
                        {
                            Object.values(ingredients).map((ingredient, index) => {
                                return <div key={index} className='Ingredient'>
                                    <p className='Ingredient__title'>Graham Cracker Crust</p>
                                    <ul className='Ingredient__list'>
                                        {
                                            ingredient.map((item, index) => {
                                                return <ListItem key={index} item={item} />
                                            })
                                        }
                                    </ul>
                                </div>
                            })
                        }
                    </div>
                    <div className="RecipePage__content__instructions">
                        <h2 className='instructions__title'>Instructions</h2>
                        <ul className='instructions__list'>
                            {
                                instructions.map((instruction, index) => {
                                    return <InstructionItem key={index} instruction={instruction} index={index} />
                                })
                            }
                        </ul>
                    </div>
                </div>
            </main>

            <p className="source">Source: https://sallysbakingaddiction.com/classic-cheesecake/ </p>

            <footer>
                <p>created by <a href="https://github.com/sahilatahar">sahilatahar</a> - devChallenges.io</p>
            </footer>
        </div>
    )
}

export default RecipePage


const ListItem = ({ item }) => {

    let parts = item.split('<b>');

    return <li className='Ingredient__list-item'>
        <input type="checkbox" />
        <span>
            {parts.map((part, index) => {
                if (index === 1) {
                    return (
                        <span key={index}>
                            <b>{part}</b>
                        </span>
                    );
                } else {
                    return <span key={index}>{part}</span>;
                }
            })}
        </span>
    </li>
}

const InstructionItem = ({ instruction, index }) => {
    return <li className='instructions__list-item' key={index}>
        <span className='instructions__list-item__number'>{index + 1}</span>
        <span>
            {
                instruction?.title && <b>{instruction.title}</b>
            }
            {
                <span>{instruction.description}</span>
            }
        </span>
    </li>
}