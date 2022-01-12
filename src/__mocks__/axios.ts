const mockResponse = {
    data:{
        books: [
            {
                id: 2,
                title: "Dropshipping",
                author: "James Moore",
                duration: 30,
                category: "Entrepreneurship",
                image: "https://images.blinkist.com/images/books/60701b716cee070008b8b7a1/1_1/470.jpg",
                isInMyLibrary: true,
                isFinished: false
              },
              {
                id: 3,
                title: "The Bully Pulpit",
                author: "Goodwin",
                duration: 19,
                category: "Politics",
                image: "https://images.blinkist.com/images/books/608aa9b16cee070007228a70/1_1/250.jpg",
                isInMyLibrary: false,
                isFinished: false
              },
              {
                id: 4,
                title: "Genesis",
                author: "Guido Tonelli",
                duration: 25,
                category: "Science",
                image: "https://images.blinkist.com/images/books/608bcaf36cee07000722912e/1_1/470.jpg",
                isInMyLibrary: true,
                isFinished: false
              },
              {
                id: 5,
                title: "Exercised",
                author: "Daniel E. Lieberman",
                duration: 20,
                category: "Science",
                image: "https://images.blinkist.com/images/books/60507e296cee070007c4dc7e/1_1/470.jpg",
                isInMyLibrary: true,
                isFinished: false
              },
              {
                id: 6,
                title: "Forest Bathing",
                author: "Qing Li",
                duration: 12,
                category: "Health",
                image: "https://images.blinkist.com/images/books/60950a3c6cee070007151f86/1_1/470.jpg",
                isInMyLibrary: true,
                isFinished: false
              },
              {
                id: 7,
                title: "The Pegan Diet",
                author: "Dr. Mark Hyman",
                duration: 25,
                category: "Health",
                image: "https://images.blinkist.com/images/books/607d9d2c6cee070007991263/1_1/470.jpg",
                isInMyLibrary: false,
                isFinished: false
              },
              {
                id: 8,
                title: "Hyper-Learning",
                author: "Edward D.Hess",
                duration: 13,
                category: "Education",
                image: "https://images.blinkist.com/images/books/609155fc6cee070007ccb3ad/1_1/470.jpg",
                isInMyLibrary: true,
                isFinished: false
              },
              {
                id: 9,
                title: "Knowledge",
                author: "Jennifer Nagel",
                duration: 15,
                category: "Education",
                image: "https://images.blinkist.com/images/books/5fdc62ce6cee070007f858bd/1_1/470.jpg",
                isInMyLibrary: false,
                isFinished: false
              },
              {
                id: 10,
                title: "Grasp",
                author: "Sanjay Sarma",
                duration: 16,
                category: "Education",
                image: "https://images.blinkist.com/images/books/5fb78f9d6cee070006e48e60/1_1/470.jpg",
                isInMyLibrary: true,
                isFinished: false
              }
        ]
    }
}

export default{
    get: jest.fn().mockResolvedValue(mockResponse)
}