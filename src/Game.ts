class Game {
    //global attr for canvas
    //readonly attributes must be initialized in the constructor
    private readonly canvas: HTMLCanvasElement; // find the right type
    private readonly ctx: CanvasRenderingContext2D; // find the right type

    //some global player attributes
    private readonly player: string = "Player1";
    private readonly score: number = 400;
    private readonly lives: number = 3;
    private readonly highscores: Array<any>; //TODO: do not use 'any': write an interface!

    public constructor(canvasId: HTMLCanvasElement) {
        //construct all canvas
        this.canvas = canvasId;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        //set the context of the canvas
        this.ctx = this.canvas.getContext('2d');

        this.highscores = [
            {
                playerName: 'Loek',
                score: 40000
            },
            {
                playerName: 'Daan',
                score: 34000
            },
            {
                playerName: 'Rimmert',
                score: 200
            }
        ]

        // all screens: uncomment to activate 
        // this.start_screen();
        this.level_screen();
        // this.title_screen();

    }

    //-------- Splash screen methods ------------------------------------
    /**
     * Function to initialize the splash screen
     */
    public start_screen() {
        //1. add 'Asteroids' text
        this.writeAsteroidHeading();
        //2. add 'Press to play' 
        this.writeIntroText();
        //3. add button with 'start' text
        this.startButton();
        //4. add Asteroid image
        this.asteroidsImage();
    }

    public writeAsteroidHeading() {
        this.ctx.fillStyle = "#fff";
        this.ctx.font = "100px Minecraft";
        this.ctx.textAlign ="center";
        this.ctx.fillText("Asteroids", this.canvas.width/2 , 100);
    }
    public writeIntroText() {
        this.ctx.font = "40px Minecraft";
        this.ctx.fillText("Press play to start", this.canvas.width/2, 300);
    }
    public startButton() {
        let startButton = new Image();
        startButton.src = "./assets/images/SpaceShooterRedux/PNG/UI/buttonBLue.png";
        startButton.onload = () => {
            this.ctx.drawImage(startButton, this.canvas.width/2.3, 600);
            this.ctx.fillStyle = "black";
            this.ctx.font = "30px Minecraft";
            this.ctx.fillText("Start", this.canvas.width/1.99, 630);
        }
    }
        //4. add Asteroid image
    public asteroidsImage() {
        let meteorImage = new Image();
        meteorImage.src = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big1.png";
        meteorImage.onload = () => {
            this.ctx.drawImage(meteorImage, this.canvas.width/2.1, 400);
        }
    }
    

    
    //-------- level screen methods -------------------------------------
    /**
     * Function to initialize the level screen
     */
    public level_screen() {
        //1. load life images
        this.drawAsteroidsLifes();
        //2. draw current score
        this.drawCurrentScore();
        //3. draw random asteroids
        this.drawRandomAsteroids();
        //4. draw player spaceship
        this.drawSpaceship();
    }

    public drawAsteroidsLifes() {
        let asteroidsLifesImage1 = new Image();
        asteroidsLifesImage1.src = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";
        asteroidsLifesImage1.onload = () => {
            this.ctx.drawImage(asteroidsLifesImage1, 50, 25);
        }
        let asteroidsLifesImage2 = new Image();
        asteroidsLifesImage2.src = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";
        asteroidsLifesImage2.onload = () => {
            this.ctx.drawImage(asteroidsLifesImage2, 100, 25);
        }
        let asteroidsLifesImage3 = new Image();
        asteroidsLifesImage3.src = "./assets/images/SpaceShooterRedux/PNG/UI/playerLife1_blue.png";
        asteroidsLifesImage3.onload = () => {
            this.ctx.drawImage(asteroidsLifesImage3, 150, 25);
        }
    }

    public drawCurrentScore() {
        this.ctx.fillStyle = "White";
        this.ctx.font = "25px Minecraft";
        this.ctx.fillText("Your score is 400", 1250, 50);
    }

    public drawRandomAsteroids() {
        let meteorImage1 = new Image();
        meteorImage1.src = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorGrey_big1.png";
        meteorImage1.onload = () => {
            this.ctx.drawImage(meteorImage1, this.randomNumber(0, this.canvas.width), this.randomNumber(0, this.canvas.height));
        }
        let meteorImage2 = new Image();
        meteorImage2.src = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_med1.png";
        meteorImage2.onload = () => {
            this.ctx.drawImage(meteorImage2, this.randomNumber(0, this.canvas.width), this.randomNumber(0, this.canvas.height));
        }
        let meteorImage3 = new Image();
        meteorImage3.src = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big2.png";
        meteorImage3.onload = () => {
            this.ctx.drawImage(meteorImage3, this.randomNumber(0, this.canvas.width), this.randomNumber(0, this.canvas.height));
        }
        let meteorImage4 = new Image();
        meteorImage4.src = "./assets/images/SpaceShooterRedux/PNG/Meteors/meteorBrown_big3.png";
        meteorImage4.onload = () => {
            this.ctx.drawImage(meteorImage4, this.randomNumber(0, this.canvas.width), this.randomNumber(0, this.canvas.height));
        }
    }

    public drawSpaceship() {
        let spaceshipImage = new Image();
        spaceshipImage.src = "./assets/images/SpaceShooterRedux/PNG/playerShip1_blue.png";
        spaceshipImage.onload = () => {
            this.ctx.drawImage(spaceshipImage, this.canvas.width/2, this.canvas.height/2);
        }
    }
    //-------- Title screen methods -------------------------------------

    /**
    * Function to initialize the title screen   
    */
    public title_screen() {
        //1. draw your score
        this.drawOwnScore();
        //2. draw all highscores
        this.drawAllHighscores();
    }

    public drawOwnScore() {
        this.ctx.fillStyle = "White";
        this.ctx.font = "80px minecraft";
        this.ctx.fillText("Your score is 420", this.canvas.width/3.4, 300);
    }

    public drawAllHighscores() {
        this.ctx.font = "35px minecraft";
        this.ctx.fillText("Highscores", this.canvas.width/2.3, 450);
        this.ctx.font = "20px minecraft";
        this.ctx.fillText("1: Loek - 40000", this.canvas.width/2.15, 500);
        this.ctx.fillText("2: Daan - 34000", this.canvas.width/2.15, 525);
        this.ctx.fillText("3: Rimmert - 400", this.canvas.width/2.15, 550);

    }
    //-------Generic canvas functions ----------------------------------

    /**
    * Renders a random number between min and max
    * @param {number} min - minimal time
    * @param {number} max - maximal time
    */
    public randomNumber(min: number, max: number): number {
        return Math.round(Math.random() * (max - min) + min);
    }
}

//this will get an HTML element. I cast this element in de appropriate type using <>
let init = function () {
    const Asteroids = new Game(<HTMLCanvasElement>document.getElementById('canvas'));
};
//add loadlistener for custom font types
window.addEventListener('load', init);
