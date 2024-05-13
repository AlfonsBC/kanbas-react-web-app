export default function Lab1() {
    return (
        <div id="wd-lab1">
            <h2>Lab 1</h2>
            <h3>HTML Examples</h3>
      <div id="wd-h-tag">
        <h4>Heading Tags</h4>
Text documents are often broken up into several sections and subsections. Each section is usually prefaced with a short title or heading that attempts to summarize the topic of the section it precedes. For instance this paragraph is preceded by the heading Heading Tags. The font of the section headings are usually larger and bolder than their subsection headings. This document uses headings to introduce topics such as HTML Documents, HTML Tags, Heading Tags, etc. HTML heading tags can be used to format plain text so that it renders in a browser as large headings. There are 6 heading tags for different sizes: h1, h2, h3, h4, h5, and h6. Tag h1 is the largest heading and h6 is the smallest heading.
      </div>
      <div id="wd-p-tag">
        <h4>Paragraph Tag</h4>
        <p id="wd-p-1"> 
        This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.

This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.

This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.
         </p>
         <p id="wd-p-2">
This is the first paragraph. The paragraph tag is used to format
vertical gaps between long pieces of text like this one.
        </p>
        <p id="wd-p-3">
This is the second paragraph. Even though there is a deliberate white
gap between the paragraph above and this paragraph, by default
browsers render them as one contiguous piece of text as shown here on
the right.
        </p>
        <p id="wd-p-4">
This is the third paragraph. Wrap each paragraph with the paragraph
tag to tell browsers to render the gaps.</p>
        </div>
        <div id="wd-lists">
        <h4>List Tags</h4>
        <h5>Ordered List Tag</h5>
        How to make pancakes:
        <ol id="wd-pancakes">
    <li>Mix dry ingredients.</li>
    <li>Add wet ingredients.</li>
    <li>Stir to combine.</li>
    <li>Heat a skillet or griddle.</li>
    <li>Pour batter onto the skillet.</li>
    <li>Cook until bubbly on top.</li>
    <li>Flip and cook the other side.</li>
    <li>Serve and enjoy!</li>
  </ol>

      </div>

      <div id="wd-your-favorite-recipe">
<p>How to make Enchiladas Verdes.</p>
Ingredients:
<ul id="wd-enchiladasverdes">
<li>2 ¼ pounds small green tomatillos, husks removed                        </li>
<li>3 serrano peppers                                                       </li>
<li>2 cloves garlic                                                         </li>
<li>1 cup vegetable oil for frying                                          </li>
<li>9 corn tortillas                                                        </li>
<li>3 cups water                                                            </li>
<li>4 teaspoons chicken bouillon granules                                   </li>
<li>½ store-bought rotisserie chicken, meat removed and shredded            </li>
<li>¼ head iceberg lettuce, shredded                                        </li>
<li>1 cup cilantro leaves                                                   </li>
<li>1 (8 ounce) container Mexican crema, crema fresca                       </li>
<li>1 cup grated cotija cheese</li>
</ul>

Recipe: 
<ol id="wd-enchiladasrecipe">
<li>Cover a large griddle with aluminum foil and preheat to medium-high.</li>
<li>Cook tomatillos, serrano peppers, and garlic on the hot griddle, 
turning occasionally, until toasted and blackened — about 5 minutes 
for garlic, 10 minutes for peppers, and 15 minutes for tomatillos. 
Remove to a bowl and allow to cool</li>
<li>Heat oil in a small, deep skillet to 350 degrees F (175 degrees C).</li>
<li>Lightly fry tortillas, one at a time, in hot oil until warmed through, 3 to 5 seconds per side. Drain on a paper towel-lined plate.</li>
<li>Place toasted tomatillos, serrano peppers, and garlic in a blender. Add water and blend until smooth; pour into a saucepan over medium heat and bring to a boil. Dissolve chicken bouillon in the mixture, reduce heat, and cook at a simmer until slightly thickened, about 10 minutes.</li>
<li>Soak tortillas in sauce, one at a time, for a few seconds. Fill each tortilla with shredded chicken and sprinkle with sauce. Roll up tortillas and place seam-side down in a serving dish.</li>
<li>Spoon a generous amount of sauce over rolled tortillas. Top with lettuce, cilantro, crema, and cotija cheese. Pour remaining sauce on top or serve on the side.</li>

</ol>
<h5>Unordered List Tag</h5>
My favorite books (in no particular order)
<ul id="wd-my-books">
  <li>Dune</li>
  <li>Lord of the Rings</li>
  <li>Ender's Game</li>
  <li>Red Mars</li>
  <li>The Forever War</li>
</ul>
Your favorite books (in no particular order)
  <ul id="wd-alfonso's">
    <li>The Holy Bible (Which is a collection of 66 books )</li>
    <li>Genesis</li>
    <li>Exodus</li>
    <li>Leviticus</li>
    <li>Numbers</li>
    <li>Deutoronomy</li>
    <li>Joshua</li>
    <li>Judges</li>
    <li>Ruth</li>
    <li>1 Samuel</li>
    <li>2 Samuel</li>
    <li>1 Kings</li>
    <li>2 Kings</li>
    <li>1 Chronicles</li>
    <li>2 Chronicles</li>
    <li>Ezra</li>
    <li>Nehemiah</li>
    <li>Esther</li>
    <li>Job</li>
    <li>Psalms (It is the book currently i am reading)</li>
  </ul>
      </div>
      <div id="wd-tables">
        <h4>Table Tag</h4>
        <table border={1} width="100%">
          <thead>
            <tr>
              <th>Quiz</th>
              <th>Topic</th>
              <th>Date</th>
              <th>Grade</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Q1</td>
              <td>HTML</td>
              <td>2/3/21</td>
              <td>85</td>
            </tr>
            <tr>
              <td>Q2</td>
              <td>CSS</td>
              <td>2/10/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q3</td>
              <td>JavaScript</td>
              <td>2/17/21</td>
              <td>95</td>
            </tr>
            <tr>
              <td>Q4</td>
              <td>Linear Algebra I</td>
              <td>2/18/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q5</td>
              <td>Linear Algebra II</td>
              <td>2/19/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q6</td>
              <td>Probability I</td>
              <td>2/20/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q7</td>
              <td>Statistics I</td>
              <td>2/21/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q8</td>
              <td>Calculus I</td>
              <td>2/22/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q9</td>
              <td>Calculus II</td>
              <td>2/23/21</td>
              <td>90</td>
            </tr>
            <tr>
              <td>Q10</td>
              <td>Calculus III</td>
              <td>2/24/21</td>
              <td>90</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={3}>Average</td>
              <td>90</td>
            </tr>
          </tfoot>
        </table>
      </div>

      <div id="wd-images">
  <h4>Image tag</h4>
  Loading an image from the internet:
  <br />
  <img id="wd-starship"
    width="400px"
   src="https://www.staradvertiser.com/wp-content/uploads/2021/08/web1_Starship-gap2.jpg"
    alt="starship"
  />
  <br />
  Loading a local image:
  <br />
  <img id="wd-teslabot" src="images/teslabot.jpg" height="200px"  alt="tesla bot"/>
</div>

<div id="wd-forms">
  <h4>Form Elements</h4>
  <form id="wd-text-fields">
    <h5>Text Fields</h5>
    <label htmlFor="wd-text-fields-username">Username:</label>
    <input id="wd-text-fields-username" placeholder="jdoe" /> <br />
    <label htmlFor="wd-text-fields-password">Password:</label>
    <input type="password" id="wd-text-fields-password" value="123@#$asd" />
    <br />
    <label htmlFor="wd-text-fields-first-name">First name:</label>
    <input type="text" id="wd-text-fields-first-name" title="John" /> <br />
    <label htmlFor="wd-text-fields-last-name">Last name:</label>
    <input type="text" id="wd-text-fields-last-name" placeholder="Doe"
      value="Wonderland" title="The last name" />
   <h5>Text boxes</h5>
<label>Biography:</label><br/>
<textarea id="wd-textarea" cols={30} rows={10}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</textarea>
<h5 id="wd-buttons">Buttons</h5>
<button id="wd-all-good" onClick={() => alert("Life is Good!")} type="button">
  Hello World!
</button>
<h5>File upload</h5>
<input id="wd-upload" type="file"/>

<h5 id="wd-radio-buttons">Radio buttons</h5>

<label>Favorite movie genre:</label><br />

<input type="radio" name="radio-genre" id="wd-radio-comedy"/>
<label htmlFor="wd-radio-comedy">Comedy</label><br />

<input type="radio" name="radio-genre" id="wd-radio-drama"/>
<label htmlFor="wd-radio-drama">Drama</label><br />

<input type="radio" name="radio-genre" id="wd-radio-scifi"/>
<label htmlFor="wd-radio-scifi">Science Fiction</label><br />

<input type="radio" name="radio-genre" id="wd-radio-fantasy"/>
<label htmlFor="wd-radio-fantasy">Fantasy</label>
  </form>
  <h5 id="wd-checkboxes">Checkboxes</h5>
<label>Favorite movie genre:</label>
<br/>
<input type="checkbox"
       name="check-genre" id="wd-chkbox-comedy"/>
<label htmlFor="wd-chkbox-comedy">Comedy</label><br/>
<input type="checkbox"
       name="check-genre" id="wd-chkbox-drama"/>
<label htmlFor="wd-chkbox-drama">Drama</label><br/>
<input type="checkbox"
       name="check-genre" id="wd-chkbox-scifi"/>
<label htmlFor="wd-chkbox-scifi">Science Fiction</label><br/>
<input type="checkbox"
       name="check-genre" id="wd-chkbox-fantasy"/>
<label htmlFor="wd-chkbox-fantasy">Fantasy</label>

<h4 id="wd-dropdowns">Dropdowns</h4>

<h5>Select one</h5>
<label htmlFor="wd-select-one-genre"> Favorite movie genre: </label><br/>
<select id="wd-select-one-genre">
   <option value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>

<h5>Select many</h5>
<label htmlFor="wd-select-many-genre"> Favorite movie genres: </label><br/>
<select id="wd-select-many-genre" multiple>
   <option selected value="COMEDY">Comedy</option>
   <option value="DRAMA">Drama</option>
   <option selected value="SCIFI">
       Science Fiction</option>
   <option value="FANTASY">Fantasy</option>
</select>

<h4>Other HTML field types</h4>

<label htmlFor="wd-text-fields-email"> Email: </label>
<input type="email"
      placeholder="jdoe@somewhere.com"
      id="wd-text-fields-email"/><br/>

<label htmlFor="wd-text-fields-salary-start"> Starting salary:
</label>
<input type="number"
      id="wd-text-fields-salary-start"
      placeholder="1000"
      value="100000"/><br/>

<label htmlFor="wd-text-fields-rating"> Rating: </label>
<input type="range" id="wd-text-fields-rating"
      placeholder="Doe"
      max="5"
      value="4"/><br/>

<label htmlFor="wd-text-fields-dob"> Date of birth: </label>
<input type="date"
      id="wd-text-fields-dob"
      value="2000-01-21"/><br/>
<h4>Anchor tag</h4>

Please
<a href="https://www.lipsum.com">click here</a>
to get dummy text<br/>

  </div>




        </div>


    );
}