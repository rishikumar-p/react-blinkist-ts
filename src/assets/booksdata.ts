import EmojiObjectsOutlinedIcon from '@mui/icons-material/EmojiObjectsOutlined';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ScienceOutlinedIcon from '@mui/icons-material/ScienceOutlined';
import SchoolOutlinedIcon from '@mui/icons-material/SchoolOutlined';
import HealthAndSafetyOutlinedIcon from '@mui/icons-material/HealthAndSafetyOutlined';
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import LanguageIcon from '@mui/icons-material/Language';
import RocketLaunchOutlinedIcon from '@mui/icons-material/RocketLaunchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import LightbulbOutlinedIcon from '@mui/icons-material/LightbulbOutlined';

let categories: string[] = [
  "Creativity",
  "Entrepreneurship",
  "Science",
  "Economics",
  "History",
  "Relationships",
  "Politics",
  "Motivation",
  "Education",
  "Communcation Skills",
  "Health",
  "Productivity",
];
 
let icons = {
    EmojiObjectsOutlinedIcon,
    RocketLaunchOutlinedIcon,
    ScienceOutlinedIcon,
    LanguageOutlinedIcon,
    HistoryEduIcon,
    FavoriteBorderOutlinedIcon,
    AccountBalanceIcon,
    LightbulbOutlinedIcon,
    SchoolOutlinedIcon,
    LanguageIcon,
    HealthAndSafetyOutlinedIcon,
    HourglassEmptyOutlinedIcon
}
let categoryIcons:[] = [
    // <EmojiObjectsOutlinedIcon/>,
    // <RocketLaunchOutlinedIcon/>,
    // <ScienceOutlinedIcon/>,
    // <LanguageOutlinedIcon/>,
    // <HistoryEduIcon/>,
    // <FavoriteBorderOutlinedIcon/>,
    // <AccountBalanceIcon/>,
    // <LightbulbOutlinedIcon/>,
    // <SchoolOutlinedIcon/>,
    // <LanguageIcon/>,
    // <HealthAndSafetyOutlinedIcon/>,
    // <HourglassEmptyOutlinedIcon/>
];


let books = [
  {
    id: 1,
    title: "Steve Jobs",
    author: "Walter Isaacson",
    duration: 20,
    category: "Entrepreneurship",
    image:
      "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 2,
    title: "Dropshipping",
    author: "James Moore",
    duration: "20",
    category: "Entrepreneurship",
    image:
      "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 3,
    title: "The Bully Pulpit",
    author: "Goodwin",
    duration: "19",
    category: "Politics",
    image:
      "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 4,
    title: "Genesis",
    author: "Guido Tonelli",
    duration: "12",
    category: "Science",
    image:
      "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 5,
    title: "Exercised",
    author: "Daniel E. Lieberman",
    duration: "13",
    category: "Science",
    image:
      "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 6,
    title: "Forest Bathing",
    author: "Qing Li",
    duration: "12",
    category: "Health",
    image:
      "https://images.blinkist.com/images/books/60950a3c6cee070007151f86/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 7,
    title: "The Pegan Diet",
    author: "Dr. Mark Hyman",
    duration: "15",
    category: "Health",
    image:
      "https://images.blinkist.com/images/books/607d9d2c6cee070007991263/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 8,
    title: "Hyper-Learning",
    author: "Edward D.Hess",
    duration: "13",
    category: "Education",
    image:
      "https://images.blinkist.com/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 9,
    title: "Knowledge",
    author: "Jennifer Nagel",
    duration: "15",
    category: "Education",
    image:
      "https://images.blinkist.com/images/books/5fdc62ce6cee070007f858bd/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 10,
    title: "Grasp",
    author: "Sanjay Sarma",
    duration: "12",
    category: "Education",
    image:
      "https://images.blinkist.com/images/books/5fb78f9d6cee070006e48e60/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 11,
    title: "Get Better",
    author: "Todd Davis",
    duration: "18",
    category: "Communcation skills",
    image:
      "https://images.blinkist.com/images/books/608a764b6cee070007228924/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 12,
    title: "Let's Talk",
    author: "Therese Huston",
    duration: "13",
    category: "Communcation skills",
    image:
      "https://images.blinkist.com/images/books/60547aca6cee0700076902e8/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 13,
    title: "The Motivation Myth",
    author: "Jeff Haden",
    duration: "13",
    category: "Motivation",
    image:
      "https://images.blinkist.com/images/books/6082d1516cee0700072c7da1/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 14,
    title: "That Sounds Fun",
    author: "Annie F. Downs",
    duration: "10",
    category: "Motivation",
    image:
      "https://images.blinkist.com/images/books/60701c7f6cee070007aad5a9/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 15,
    title: "Fear",
    author: "Bob Woodward",
    category: "Politics",
    duration: "15",
    image:
      "https://images.blinkist.com/images/books/609901436cee0700077e6675/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 16,
    title: "Flash Crash",
    author: "Liam Vaughan",
    category: "Economics",
    duration: "12",
    image:
      "https://images.blinkist.com/images/books/600187c36cee0700069e4cef/1_1/470.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 17,
    title: "Post Corona",
    author: "Scoot Galloway",
    category: "Economics",
    duration: "12",
    image:
      "https://images.blinkist.com/images/books/6007f93c6cee070007a81d3f/1_1/250.jpg",
    isInMyLibrary: "false",
  },
  {
    id: 18,
    title: "Fault Lines",
    author: "Karl Pillemer",
    category: "Relationships",
    image:
      "https://images.blinkist.com/images/books/60645e806cee070007b3bc0a/1_1/470.jpg",
    duration: "15",
    isInMyLibrary: "false",
  },
];



export { books, categories , categoryIcons};
