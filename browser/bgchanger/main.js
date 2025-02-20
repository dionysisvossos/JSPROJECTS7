let color = undefined

window.addEventListener('DOMContentLoaded', function() {
    this.document.querySelector('#btn').addEventListener('click', function() {
        onClickMeClicked()
    })
})

function onClickMeClicked() {
    updateBg()
}

/**
 * Model
 */
function updateBg() {
    color = getBgColor()            // update state
    renderBg()                      // render based on updated state
}

function getBgColor() {
    const colors = ['red', 'green', 'blue', 'yellow', 'purple', 'orange', 'pink', 'brown', 'black', 'white']
    return colors[Math.floor(Math.random() * colors.length)]
}

/**
 * View - UI rendering
 */
function renderBg() {
    document.querySelector('#hex').innerHTML = color
    document.body.style.backgroundColor = color
}