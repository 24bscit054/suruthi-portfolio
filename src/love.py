import turtle
import random

screen = turtle.Screen()
screen.bgcolor("black")
screen.title("Love You in 75 Languages")
screen.setup(width=900, height=800)

pen = turtle.Turtle()
pen.hideturtle()
pen.speed(0)

love_words = [
    "I love you", "Te amo", "Je t'aime",
    "Ich liebe dich", "Ti amo", "Seni seviyorum",
    "Ya tebya lyublyu", "Kocham cię",
    "Eu te amo", "Nakupenda", "Volim te",
    "Mahal kita", "Main tumse pyar karta hoon",
    "Naan unnai kaadhalikkiren",
    "আমি তোমাকে ভালোবাসি", "愛してる",
    "사랑해", "我爱你", "Я тебя люблю",
    "Jeg elsker deg", "Jag älskar dig",
    "Minä rakastan sinua", "Ik hou van jou",
    "Aishiteru", "Te iubesc", "Obicham te",
    "T'estimo", "Ek het jou lief",
    "Ana uhibbuka", "Miluji tě",
    "Ljubim te", "Tave myliu",
    "Szeretlek", "Kocham cię",
    "Ez ji te hez dikim",
    "Mi amas vin", "Rwy'n dy garu di",
    "Tora dost daram", "Mina rakastan sinua",
    "Ami tomake bhalobashi", "Nenu ninnu premistunnanu",
    "Main tenu pyar karda haan",
    "Aham tvam preman karomi",
    "S'agapo", "Ik hou van je",
    "Te quiero", "Ya lyublyu tebya",
    "Wo ai ni", "Ngiyakuthanda",
    "Ke a go rata", "Ninakupenda",
    "Ana bahebak", "Mwen renmen ou",
    "Ua here au ia oe", "Aloha wau iā ʻoe",
    "Ngo oi nei", "Saya cinta padamu",
    "Aku cinta kamu", "Phom rak khun",
    "Chan rak khun", "Anh yêu em",
    "Em yêu anh", "Szeretlek",
    "Jeg elsker dig", "Jag älskar dig",
    "T'estimo molt", "Te dua",
    "Ma armastan sind", "Volim te mnogo",
    "Kocham cię bardzo", "I love you forever",
    "You are my love", "My heart is yours",
    "Forever yours", "Love you always"
]

# Draw a heart shape
pen.penup()
pen.goto(0, -240)
pen.pendown()
pen.color("red")
pen.pensize(3)
pen.begin_fill()
pen.left(140)
pen.forward(180)
pen.circle(-90, 200)
pen.left(120)
pen.circle(-90, 200)
pen.forward(180)
pen.end_fill()
pen.setheading(0)

# Place love words inside the heart area
pen.penup()

random.seed(10)
for word in love_words:
    x = random.randint(-180, 180)
    y = random.randint(-100, 130)

    # Keep text near the heart centre
    if abs(x) + abs(y) < 260:
        pen.goto(x, y)
        pen.color(random.choice([
            "tomato", "coral", "salmon",
            "orange", "lightpink"
        ]))
        pen.write(
            word,
            align="center",
            font=("Arial", 9, "bold")
        )

screen.mainloop()