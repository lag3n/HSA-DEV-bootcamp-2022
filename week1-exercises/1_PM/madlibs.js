/* In this task, make a madlibs templates story
using JS string template literals. In the story
variable, write out the template of your madlibs
using string variables in the place of certain
nouns, adjectives, and verbs */

/* Variables, i.e.
const noun1 = ______
const verb1 = ______

Change thses values to generate a different story
*/

let place1 = "CVS";
let friend_name = "Clara";
let number_of_hours = 15;
let vehicle = "Honda";
let place2 = "Waikiki Beach";
let plural_noun1 = "cars";
let plural_noun2 = "bicycles";
let noun = "shoe";
let past_tense_verb = "decided";


const story = 
`Yesterday, I went to ${ place1 } with ${ friend_name }. We traveled for ${ number_of_hours } hours by ${ vehicle }. 
We were especially interested in visiting ${ place2 } with their fantastically small ${ plural_noun1 }. There 
were so many interesting ${ plural_noun2 } there! I remember one had its ${ noun } and we ${ past_tense_verb } 
with it all night long! It was truly an experience to remember.`;

console.log(story);
