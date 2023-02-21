function choice(items) {
    const randChoice = items[Math.floor(Math.random() * items.length)]
    return randChoice
}

function remove(items, item) {
    items.splice(items.indexOf(item), 1)
}

export {choice, remove}