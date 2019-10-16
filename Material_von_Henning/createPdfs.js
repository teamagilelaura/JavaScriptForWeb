const mdToPdf = require('md-to-pdf')

const files = [
    './exercises/Session-01',
    './exercises/Session-02',
    './exercises/Session-03',
    './exercises/Session-04',
    './exercises/Session-05',
    './exercises/Session-06',
    './exercises/Session-07',
    './exercises/Code-Puzzles',
    './exercises/Travel-Blog-Features'
]

files.forEach(async file => {
    const pdf = await mdToPdf(`${file}.md`, { dest: `${file}.pdf` }).catch(console.error)
    if (pdf) {
        console.log(pdf.filename)
    }
})
