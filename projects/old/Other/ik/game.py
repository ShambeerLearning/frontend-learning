import pygame as pg

pg.init()
SCREEN_WIDTH, SCREEN_HEIGHT = 480, 640
SPEED = 6
BIRD_WIDTH = 50
BIRD_HEIGHT = 50
PIPE_WIDTH = 80
PIPE_GAP = 250

screen = pg.display.set_mode((SCREEN_WIDTH, SCREEN_HEIGHT))
clock = pg.time.Clock()

class Bird(pg.sprite.Sprite):
    def __init__(self):
        super().__init__()
        self.image = pg.Surface((BIRD_WIDTH, BIRD_HEIGHT))
        self.image.fill("yellow")
        self.rect = self.image.get_rect()
        self.velocity = 0
        
    def update(self):
        self.velocity += 0.5  
        self.rect.y += self.velocity

def main():
    bird = Bird()
    all_sprites = pg.sprite.Group(bird)
    
    while True:
        for event in pg.event.get():
            if event.type == pg.QUIT:
                pg.quit()
                return
            if event.type == pg.KEYDOWN:
                if event.key == pg.K_SPACE:
                    bird.velocity = -10  
        
        all_sprites.update()
        screen.fill("white")
        all_sprites.draw(screen)
        pg.display.update()
        clock.tick(60)

if __name__ == "__main__":
    main()