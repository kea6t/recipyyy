import React from 'react';

const Newrecipe = () => {
    function createRecipe() {
        alert('This button is working');
    }

    return (
        <section className='text-white'>
            <form>New Recipe Form
                <div>
                    <label for="rtext">recipeText:</label>
                    <input type="text" id="rtext" name="rtext"></input>
                </div>
                <div>
                    <label for="uname">username:</label>
                    <input type="text" id="uname" name="uname"></input>
                </div>
                <div>
                    <label for="des">descriptin:</label>
                    <input type="text" id="des" name="des"></input>
                </div>
                <div>
                    <label for="dir">directions:</label>
                    <input type="text" id="dir" name="dir"></input>
                </div>
                {/* <div>
                    <button onClick={createRecipe(e)}>Create Recipe</button>
                </div> */}
            </form>
            <button onClick={createRecipe}>Create Recipe</button>
        </section>
    );
};

export default Newrecipe;