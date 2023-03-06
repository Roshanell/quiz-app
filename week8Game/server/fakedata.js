// File to save one response for the API so I can use it to hardcode if I need it
// and don't saturate the API call 

const fakedata = {"response_code":0,
"results":[{"category":"General Knowledge","type":"boolean","difficulty":"medium",
"question":"Furby was released in 1998.","correct_answer":"True","incorrect_answers":["False"]},
{"category":"General Knowledge","type":"boolean","difficulty":"medium",
"question":"There are 86400 seconds in a day.","correct_answer":"True","incorrect_answers":["False"]},
{"category":"General Knowledge","type":"boolean","difficulty":"medium",
"question":"Albert Einstein had trouble with mathematics when he was in school.","correct_answer":"False","incorrect_answers":["True"]},
{"category":"General Knowledge","type":"boolean","difficulty":"medium",
"question":"Fast food restaurant chains Carl&#039;s Jr. and Hardee&#039;s are owned by the same company.","correct_answer":"True","incorrect_answers":["False"]},
{"category":"General Knowledge","type":"boolean","difficulty":"medium",
"question":"The pickled gherkin was first added to hamburgers because a US health law required all fast-food to include a source of Vitamin C.","correct_answer":"False","incorrect_answers":["True"]
}]}

export default fakedata;