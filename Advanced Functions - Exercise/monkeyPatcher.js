function solution(arguments) {
    let result = [];
    if (arguments == "upvote") {
        this.upvotes++;
    } else if (arguments == "downvote") {
        this.downvotes++;
    } else {
        let positiveScore = 0;
        let negativeScore = 0;
        if (this.upvotes >= this.downvotes && (this.upvotes + this.downvotes) > 50) {
            positiveScore = Math.ceil(this.upvotes + (this.upvotes * 0.25));
            negativeScore = Math.ceil(this.downvotes + (this.upvotes * 0.25));
        } else if (this.upvotes <= this.downvotes && (this.upvotes + this.downvotes) > 50) {
            positiveScore = Math.ceil(this.upvotes + (this.downvotes * 0.25));
            negativeScore = Math.ceil(this.downvotes + (this.downvotes * 0.25));
        } else {
            positiveScore = this.upvotes;
            negativeScore = this.downvotes;
        }
        result.push(positiveScore);
        result.push(negativeScore);
        let difference = positiveScore - negativeScore;
        result.push(difference);
        let rating = "";
        if ((this.downvotes + this.upvotes) * 0.66 < this.upvotes && (this.downvotes + this.upvotes) > 10) {
            rating = "hot";
        } else if (difference >= 0 && (this.downvotes + this.upvotes) > 100) {
            rating = "controversial";
        } else if (difference < 0) {
            rating = "unpopular";
        } else if ((this.downvotes + this.upvotes) < 10) {
            rating = "new";
        } else {
            rating = "new";
        }
        result.push(rating);
    }
    return result;
}

let post = {
    id: '3',
    author: 'emil',
    content: 'wazaaaaa',
    upvotes: 10,
    downvotes: 30
};
let score = solution.call(post, 'score');
console.log(score);