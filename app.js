const reviews=[
    {
        id: 1,
        author: "Harry Potter",
        role: " True Gryffindor",
        personimg :"photos/harrypotter.jpg",
        review: "Harry Potter is a series of seven fantasy novels written by British author J. K. Rowling. The novels chronicle the lives of a young wizard, Harry Potter, and his friends Hermione Granger and Ron Weasley, all of whom are students at Hogwarts School of Witchcraft and Wizardry.",
    },
    {
        id: 2,
        author: "Hermoine Granger",
        role: "Miss Know-It-All",
        personimg: "photos/hermoine.jpg",
        review: "Hermione Jean Granger is a fictional character in J. K. Rowling's Harry Potter series. She first appears in the novel Harry Potter and the Philosopher's Stone, on the Hogwarts express as a first year student on her way to Hogwarts.",
    },
    {
        id: 3,
        author: "Ronald Weasley",
        role: "Gregarious",
        personimg: "photos/ronweasley.jpg",
        review: "Ronald Bilius Weasley is a fictional character in J. K. Rowling's Harry Potter fantasy novel series. His first appearance was in the first book of the series, Harry Potter and the Philosopher's Stone, as the best friend of Harry Potter and Hermione Granger.",
    },
    {
        id: 4,
        author: "Sirius Black",
        role: "Rebellious",
        personimg: "photos/siriusblack.jpg",
        review: "Sirius Black is a fictional character in J. K. Rowling's Harry Potter series. Sirius was first mentioned briefly in Harry Potter and the Philosopher's Stone as a wizard who lent Rubeus Hagrid a flying motorbike shortly after Lord Voldemort killed James and Lily Potter.",
    },
    {
        id: 5,
        author: "Draco Malfoy",
        role: "Slytherin",
        personimg: "photos/dracomalfoy.jpg",
        review: "Draco Lucius Malfoy is a fictional character in J. K. Rowling's Harry Potter series. He is a student in Harry Potter's year belonging in the Slytherin house. He is frequently accompanied by his two cronies, Vincent Crabbe and Gregory Goyle, who act as henchmen.",
    },
    {
        id: 6,
        author: "Lord Voldemort",
        role: "You-Know-Who",
        personimg: "photos/voldemort.jpg",
        review: "Voldemort is the archenemy of Harry Potter, who according to a prophecy has the power to vanquish the Dark Lord. He attempts to murder the boy, but instead kills his parents, Lily and James Potter, and leaves Harry with a scar on his forehead in the shape of a lightning bolt.",
    },
    {
        id: 7,
        author: "Rubeus Hagrid",
        role: "Loyal",
        personimg: "photos/hagrid.jpg",
        review: "Rubeus Hagrid is a fictional character in the Harry Potter book series written by J. K. Rowling. He is introduced in Harry Potter and the Philosopher's Stone as a half-giant and half-human who is the gamekeeper and Keeper of Keys and Grounds of Hogwarts, the primary setting for the first six novels.",
    }
];
const img=document.getElementById("personimg");
const author=document.getElementById("author");
const role=document.getElementById("role");
const review=document.getElementById("review");
const prevbtn=document.querySelector(".prevbtn");
const nextbtn=document.querySelector(".nextbtn");
const randombtn=document.querySelector(".randombtn");

let currentItem=0;

window.addEventListener("DOMContentLoaded",function()
{
    showDetails(currentItem);
    
});

function showDetails(currentItem)
{
    const item=reviews[currentItem];
    img.src=item.personimg;
    author.textContent=item.author;
    role.textContent=item.role;
    review.textContent=item.review;
}
//show next item
nextbtn.addEventListener('click',function()
{
    currentItem+=1;
    currentItem%=reviews.length;
    showDetails(currentItem);
});
//show next item
prevbtn.addEventListener('click',function()
{
    currentItem-=1;
    if(currentItem<=0)
    currentItem=reviews.length-1;
    showDetails(currentItem);
});
//show random item
randombtn.addEventListener('click',function()
{
    currentItem=Math.floor(Math.random()*reviews.length);
    if(currentItem==0)
    currentItem=reviews.length;
    showDetails(currentItem);
});

