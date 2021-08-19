export default function flashCard(card) {
    return `

    <h1> WELCOME TO OUR FLASHCARD PAGE! </h1> 
    <div class="contain-wrapper">
    <div class="flashCard-items-wrapper">

        <div class="flashCard-item-wrapper">
            <div class="flashCard-img-background" style="background-image:url(images/images/flashcard1.jpg)"></div>
            <div class="img-text-wrapper">
                <div class="logo-wrapper">
                    <img src="${card.image}">
                </div>
                <div class="subtitle">
                Flash cards are an easy and interesting way for your children recognize the world around them. Approved worldwide by child psychologists teachers and parents themselves flashcards are ideal for very young children and those up to 7 years of age.
                </div>
            </div>
        </div>
    `
}