export const launchAnimations = (element, animationName) => {
    if (!element.classList.contains(animationName)) {
        if (element.localName === 'img') {
            if ((window.innerHeight + window.scrollY) > element.offsetParent.offsetTop - 20) {
                element.classList.add(animationName)
            }
        } else {
            if ((window.innerHeight + window.scrollY) > element.offsetTop - 20) {
                element.classList.add(animationName)
            }
        }
    }
}

export const rollbackAnimation = (element, animation) => {
    element.classList.add(animation)
}