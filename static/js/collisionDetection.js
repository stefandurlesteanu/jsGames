export function detectCollision(ball, gameObject) {
        let bottomOfBall = ball.position.y + ball.size;
        let topOfTheBall = ball.position.y;

        let topOfObject = gameObject.position.y;
        let leftSideOfObject = gameObject.position.x;
        let rightSideOfObject = gameObject.position.x + gameObject.width;
        let bottomOfTheObject = gameObject.position.y + gameObject.height;

        if (
            bottomOfBall >= topOfObject &&
            topOfTheBall <= bottomOfTheObject &&
            ball.position.x >= leftSideOfObject &&
            ball.position.x + ball.size <= rightSideOfObject
        ) {
            return true;
        } else {
            return false;
        }

}