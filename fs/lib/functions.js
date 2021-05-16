module.exports = {
    'cwd': () => process.cwd(),
    'resolve': (filepath) => path.resolve(filepath),
    'dirname': (filepath) => path.dirname(filepath),
    'filename': (filepath) => path.basename(filepath),
    'extname': (filepath) => path.extname(filepath),
    'join': (...str) => path.join(...str)
}