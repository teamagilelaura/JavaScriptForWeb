const mdToPdf = require('md-to-pdf')

const files = ['./exercises/Session-01', './exercises/Session-02']

files.forEach(async file => {
    const pdf = await mdToPdf(`${file}.md`, { dest: `${file}.pdf` }).catch(console.error)
    if (pdf) {
        console.log(pdf.filename)
    }
})
