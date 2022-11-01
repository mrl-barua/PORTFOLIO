async function init () {
    const node = document.querySelector("#type-text")
    
    await sleep(1000)
    node.innerText = ""
    await node.type('Input: ')
    
    
    while (true) {
      await node.type('Hello I am Marlo Barua!')
      await sleep(4000)
      await node.delete('Hello I am Marlo Barua!')
      await node.type('and I am a Programmer')
      await sleep(4000)
      await node.delete('and I am a Programmer')
      await node.type('Nice to Meet you シ')
      await sleep(4000)
      await node.delete('Nice to Meet you シ')
    }
  }
  
  
  // Source code 🚩
  
  const sleep = time => new Promise(resolve => setTimeout(resolve, time))
  
  class TypeAsync extends HTMLSpanElement {
    get typeInterval () {
      const randomMs = 100 * Math.random()
      return randomMs < 50 ? 10 : randomMs
    }
    
    async type (text) {
      for (let character of text) {
        this.innerText += character
        await sleep(this.typeInterval)
      }
    }
    
    async delete (text) {
      for (let character of text) {
        this.innerText = this.innerText.slice(0, this.innerText.length -1)
        await sleep(this.typeInterval)
      }
    }
  }
  
  customElements.define('type-async', TypeAsync, { extends: 'span' })
  
  
  init()