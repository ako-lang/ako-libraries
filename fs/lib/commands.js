module.exports = {
    'exists': (ctx, entry, entryData, timeRemains) => {
      if (!entryData.elapsed || ctx.vm.resume) {
        const args = getArgs(ctx, ['filepath'], entryData.meta.args)
        fs.exists(args.filepath, (exists) => {
          entryData.done = true
          entryData.result = exists
        })
      }
      if (entryData.done) return {timeRemains: entryData.duration, done: true, result: entryData.result}
      return {timeRemains: 0, done: false}
    },
    'readfile': (ctx, entry, entryData, timeRemains) => {
      if (!entryData.elapsed || ctx.vm.resume) {
        const args = getArgs(ctx, ['filepath', 'type'], entryData.meta.args)
  
        fs.readFile(args.filepath || '', (err, data) => {
          entryData.done = true
          if (err) console.warn(err)
          else if (args.type === 'json') {
            entryData.result = JSON.parse(data.toString())
          } else if (args.type === 'binary') {
            entryData.result = data
          } else {
            entryData.result = data.toString()
          }
        })
      }
  
      if (entryData.done) return {timeRemains: entryData.duration, done: true, result: entryData.result}
      return {timeRemains: 0, done: false}
    },
    'writefile': (ctx, entry, entryData, timeRemains) => {
      if (!entryData.elapsed || ctx.vm.resume) {
        const args = getArgs(ctx, ['filepath', 'type', 'data'], entryData.meta.args)
        const data = args.type === 'json' ? JSON.stringify(args.data) : args.data
        fs.writeFile(args.filepath || '', data, () => (entryData.done = true))
      }
  
      if (entryData.done) return {timeRemains: entryData.duration, done: true}
      return {timeRemains: 0, done: false}
    }
  }