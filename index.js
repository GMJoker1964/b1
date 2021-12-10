var fs = require('fs');
const path = require('path');
// <!-- write -->

let content = [{
    name: "Tran Hai Nam",
    age: 22
}]

fs.writeFile('student.json', JSON.stringify(content), (err) => {
    if (err){
        console.log(err);
        return;
    } 
    console.log("Successfully create File");
});

// <!-- read -->
fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', (err, data) => {
    if(err) return;
    console.log("File data: " + data)
})

// <!-- update -->
fs.readFile(path.resolve(__dirname, 'student.json'), 'utf8', (err, data) => {
    if(err) return console.log(err);
    let dataParse = JSON.parse(data);
    dataParse.push({
        name: "Hoang Thu Truc",
        age: 27
    });

    fs.writeFile('student.json', 'students.json', (err) => {
        if (err){
            console.log(err);
            return;
        } 
        console.log("Successfully update File");
    });

})
// <!-- rename -->

// delete 

// fs.unlink('student.json', function (err) {
//     if (err) throw err;
//     console.log('File deleted!');
// });