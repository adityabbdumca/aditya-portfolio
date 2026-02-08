import {
  FaGraduationCap,
  FaUniversity,
  FaCalendar,
  FaAward,
  FaExternalLinkAlt,
  FaMedal,
} from "react-icons/fa";

// College logo images - make sure to add these to your public/images folder
const collegeLogos = {
  bbd: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmTFZ-yvXf1PAJnXiUFULeZViImquDcU8mQZSChh00vA&s", // Babu Banarasi Das University logo
  prof: "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxITEhUTEhMWFhUXGB0aGBgYGR8eGxggIB0YGB8dGxodHigiGhslGx4eITEhJSkrLi4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0mICYtMi0tLy8tLS0tLS8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAOIA3wMBEQACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAFBgADBAcCAf/EAEkQAAIBAgQDBQUDCAYKAgMAAAECAwQRAAUSIQYxQRMiUWFxBxQygZFCUqEjM2JygrHB0RUkU5Ki8BYlNENjc6PC4fGDs5Oy0v/EABoBAAIDAQEAAAAAAAAAAAAAAAADAQIEBQb/xAA7EQABAwIDBAkEAQQCAgIDAAABAAIDESEEEjFBUWFxBRMiMoGRocHRFLHh8EIjM1LxFWIkolPSBnKS/9oADAMBAAIRAxEAPwDuOBCmBCmBCmBCmBCmBCmBCmBC+E23OBCBT8W02opDrqZAbFadTJY+DOO4h/WYYcIXUq63O35QqzVZlL8EEFMPGZzI/wA44rL/ANQ4KRDUk8rep+FC+nI6p/z2YzDxEEccan+8rt/iwdYwaNHjX8KVP9EYCbvJVSH9Kqmt/dVwv4YOvdsA8h8Ioo3BOXn4qcMfFmcn6lsQJ5BoUUXyPgygG6QhbXF0d1I6HdWFj0wGeQ6lFFTV8P0sC9oaqop1vbU1ZIFueW0rlb+VsWEr3WoD4D2ChWrlFYgvDmLOOY94ijkB+cYjPzucRnYdW+RI+9UL1/SGYRfnaWOdfvU0lm//ABS2H0kODLGdDTn8j4QrqLiqldxGzmGU8op1MTn9UOBr/ZJxBheBXUcLqao3hSFMCFMCFMCFMCFMCFMCFMCFMCFMCFMCFMCFMCFMCFMCF8ZgASTYDmT0wIS63EbzkrQRdtvYzudNOvjZ7EynyQEeLDDuqDe+acNv48VCi8Mdr3q6Zqk/2fwQDyEKnvj/AJhfB12XuCn38/iiKIlWV9LSRgySRQRgbXKoPQDb6DFGtc82FSpWGl4pinp556VZJ+xDWUIy9owF9KFlGrw2+m4vYwlrg11qoSlU8cVkgUxGkhBqEp2Vg7yKzae+oJj1RgMp3ANyRba50Nw7BrU2ru+VFULzjiKsjNSJK+UNG4iiVY6eIO9iWJVyzrEndYuTbS179cMZEw0o0bzcn7Wr7oWZc1mk95aPMalxFJSKGWRSp7Z9EguEAbSwYBl22HPFurApVgFQ70FQoT3QIafNPd0ZmSal7WTVa5kR1j7U2AAZ1NmsBcoDjI7tRZjsNPA7PBTtQ72hUsklXRKJlCkyPoliWSNDHG5MhGzN3W06b25EbjF8O4BjiR5GhudEFBeGuKauJoYIaeN1qGLQoVkp1K6S5aINrVYrLewOxcd0BhhskLDVxOmuh89LoTJQe0ilYD3hJafdhqddUZ0Noa0iXGlW2LGwuRhDsK/+N/yiqZQaWsi/3VRE36rof3jCe0w7QVKCUmV6bnLKwAKSGhdu2hB6rz1xHyVrD7uGF9f7jfHQ/B/bqFrpeJQrrFWxmmkY2Uk6oZD/AMObYXP3WCt5YgxVFWGo9fJCYMJUqYEKYEKYEKYEKYEKYEKYEKYEKYEKYEKYEIZnWdxU4UNqeV9o4UF5JD+ivgOrGyjqRi7Iy7lv2IQ1MjlqjrzAgpe60iG8Q8O1O3bt5GyDwPPF+sDLR+e3w3fdQir5lEiS6bsIO66RoWZTpVwoVRudLKbDxGF5SSOKlKBzyurGnSMPSLDo1xhVesdXFwyhyI4xa/3jdWA3sMaerjjAJ7VfL5PooQLKeGal4551hdnZmRGkBjqwBus0c05Y3a9irBdgbHbvNfK0ENr/APXlQflCJ8GVX9HyzwVTaQyRTObu6xSshEokkN7atIkuTYXO9rYpMOtAc3iOY2W9EJgqeBaCTtHWMK8rrJ2qkF1YEPeNmvpBIuQNjhIxEgoK2GxSjNSlKknbSCFZNOntGCh9PhqO+ny5YUC4igrRCDVNVk7Fi81Hdwgb8qgv2ZLJybmpOx5jDQ2bYD67dVFl6y2vy9ZpZ/foJJZbLcyx91BfTGgB2UEk+JLEnoBDmyZQ3KaDgUIoaOnmmjqAVd4ldVKsCLPp1XA2+yN8UzOaC3f7KUGHAkCTLNTu8LLHIgGouF1qFUprY6Am9lXbfywz6hxbldf991FECp+DKhaeSXtJTVO2lgrCImMSjtBEQSEaYIJCxPeJF7XbDjO0uApbz2WrvpoiiV6XLTGlVOFminEyUtIqyaZWmJJPaPHYTfELkg3VDck740F+YtbYilTupwrp8lC25NmcWW1IQdlKkKtHNJTxmJmC2UiRGsk7RuQdaMWF2Fu9ikjHTNrcV0qa+W0V3G3FC6fQZjSV0Ldm0c8Td11IuPNXRhcHyIxgc18br2KlDjl1RR96kvNAOdM7d9B/wJGP/Tc28CvLF8zZO9Y7/n5+6hGMozaGpTXE17GzKQQ6N1V0O6MPA4o9hYaFSt2KIUwIUwIUwIUwIUwIUwIUwIUwIQXOc6ZXFPTKJKlhfST3Il5dpKRuF8BzYiw6kNYwUzO0+/JCzU8FPQlZKiRnqKmRYjMyks7G5VAFBEUQsbDZRzJJuTJLpLNFhen7qVCzx8bRS1kdJTAS6i2qUtpjsg7wiNj2zjwG3PfY2k4dzWF7vL53Iqq8rzD3WtqaepIRaiXtqeRtlkuqq8erkHUrsvMg4lzM8Yc3ZY/PJCKLw5ElQ1TAzQySEGbTYrMBc2YMDbmd00nzOF9aS3KbjZwUoZn/ALRKCmJXtO2kH2IrNY+Ba+kHyvfyxYQOpV1hxUEgJNlz3MayYT0mXxRMAVE7rqcDls72Ubfonna/iwFgbQVd6D5SjM3YrV4XzGoYirzBxa10Rjax8l0r+GAPeBZrR6n1VDK7Yr6b2X0YN2aRz13A/cMQ58p1eVTM87URT2eUAB/JMbAnd2/nihzUu4+akB1dSqqbgLL5IkfsiNQv8bfzwDMNHHzQQ7eVTN7MaK4ZDKjdCGFx6Ei+L9ZL/mfQ/dTVw2r4/DmYU1jS5lLubBJTqHp3tQA+WJL66tB9Pt8KeteNVqj4pzam/wBro1nQf7yA2a3iV3B+i4OrjcK1y87j59FcTDajGUcU5bXPH3lE0b6kjlGl1fSUut9mOkkbE/hhbopGAkabxcJoIKz5vwQJKqFxI5phK08sDNdNfxDs1ttrcsWubG5Ft8XZiKNIpelK/voii5/T1k0kz1UdQyVbuFiiRomeR5GuEkAAKxRLcOkq3UgWO+NhaA3KR2d9/McTsIPghdC4d44V27GrCpJ2jRLMgb3ed1NiI5CNmv8AZJ58icY5MOQMzNNabQhF84yMs/vFM4hqgLarXSUD7Eyj418D8S9DzBWySgyuuPtyUq/I86E+qN1MVRHbtYWO635Mp+3GejDn5EEYh8eW4uDtQiuFoUwIUwIUwIUwIUwIUwIQXPs1dGWnpgGqZQSoPwxLyMsn6I6Dmx2HUhjGA9p2g/aIQqsnTLI4kQCWapl0tNM+gO+ksZJpLGwCrsoHIAAWGGAGYkmwA0H2CjRKXEfEs1XGIpJGgppY5THLHExNWy2ARULF1iNx4F7fZBtjRFEIzUCpFLV09q/ZClLkclUyyxwSQSqhiqYVfsjG3Z6YZICR+bFy2jVbVY2JBuGQMsTXaDrW968ePshNOf8AFNPR0yRVoWafQAYQRIW6BnLKoAI3JIG97BsZmsqS4Gg36IJok2Z8yzNdUje7Uew0LcAry5bNJt42XwGAyBgrEPE6+A2fdJMlTRqa+H+CqSnAYR63+8+59QOQ+WIdc1OqUGk3ddMqwjl16YCVcN2IRXTdlWQauUqFD6i7DGd7sr202p7Ig5rnbgjiRePrh9UoNVeYNpikbwRv3HFHuo0lNjbV4CH8JHVRwH9H+JxWN1W1VpmAOoi4iG22GVSsqBVE2utjhHKNGkb1PdX+OKdYesycKq4iBiz8aIqyWFzhtapFKIJnnCtJUg9rENR5OuzfUc/ni0ZyHMFWlNEBppcyy+5jY1tKpsUc/lEtz0tuTbw3G2wGJJbIaOFDvGniPhMbIQO0jNI9DmiPLTMIars3TVpAmh1gAll6nawYE82sRc4jtxUBu3XgaJwINwhfEHDsgR4YQfdaZYlWB3EcEiWZ5Xlcr3m6agbqRq54ZHKK1dqa328KIX3gviyWOOMVayClkbTT1EpBYfdWYj7JNwkpA1Bd/HEzwgk5dRqB7e42IThn+S9tplibsqmK5ilte1+aOPtxN1X5ixAOM0cmWxuDqP3ahWZDm/bqyuvZzxHTNETcoeYIP2kYbq3UeYIxD2ZdNDopRTFEKYEKYEKYEKYEIbn2bCmi16S7sQkUY+KRz8Kj95PIAEnYYvGzOaefBCq4fykwqzysJKiUhppOhPRVv8MaDZR6nmTiZH5rDQafu9CXJ87psyqDQuhNMQWSQMwFQ0TDWqlRYxKdibi5G2HdW+FvWDX7V08VCvyzhdlkEFQiz08QvS1BbTPCP7Istm2sLOpGwF/KrpgRVtidRsPFSg/FHGxjtQZaWlm+AyljIVPVVZyS7jqzEhfM7CMob2pNug0r8BUc8NXnhfgRYz29We1nY6iGOoKepJPxt5nEOzONX+A2BZzV2qevdgVIPIi3yxBcmBqD5BVFZJKOQ3eM9wn7aHcH1HI4zQuy9hxuFqnjBpI3Q+yYxF9Rth1UnKlX2jxFYo5l5xyA/wAMZcTXKHDYtmEaHOMf+QomagnWWNJB9pQcPY/M0Hesz2ZXFu6yxcVNppJj+gRik7v6TuSbhm1maOKwezxr0SeRI/HC8K6rEzGsyy0THKwVST0BONBNLlZaJP4Hczz1VQ32mCj0HLGaA5yZfBbsW0RBsQ3Bx5lNvZgnyxrqufSqA8R15iVY13mkbTGB59fQDfFJJKWbqrQw5ya7BXyWunpOzRUG9hz8T1J+eHtNrpMhzOrvS7xDwkJHFRTOaeqXdZE2v5MOt+Xn1vizXFulxu2f74pYqzRfco4gSsDZdmcQSc2up2ScAhrofHa5XqL26gGXL/Uj2eY/d60MeHBD+MOHZGr1EMEMpqYyqu6vamVUWJyVB7N00tdVIvqY2w2GUCO5Ip6+44lWTxw7lJpYFg7V5QmytJbUB0W46DkPKw6YyyPzuzUopWbiHLZNS1VMP6xELaeQnj5tE3n1Vj8LeRa9o3juu0Ppx+UIllOYx1ESTRG6sOuxB5FWHRgbgjoQcUe0tNCha8VQpgQpgQvhNueBCUIMxjYyZpUEinjBSmABbuEhWmCqCS0jWC7bIB9440FpFIm67fjw+6hYeJeIlqZY8uR2p+2/PPJ3GEf9ml/97JyF+QufDFooywGQ3ppz+AhCI+DKqpWY9mtLHLLFH2LjvxQQlNPZSKzAXsSUKkFze/Uu+oYwjaQDfeTvB++5FF84w4ikDf0ZQSSSOTpkkLXZeQ7JHAB2HxObleV78kCjAHuFzoPc8PuqvflCJ8NcLrQxh1USS279uo6rH4W/HCyCauN3Hes4ualNOWVUcqB0YEHw6eR8DiA/NonOiMZyusURRbYgqwFEqce0Tx9lWQ7PEQD+r5+WMOKDhSRuzVb8Flc4xv2ig4HemHIM2SphWRTuR3h4HrjRG/O0OWeaIxSFhWTjaDXRyjwF/piJ7xO5JmEdkxEbjvCEezTMS8BiJ3jO3pzwvCuzxcjRP6ThEWIse8K+qIe0CXTRv52GGTisTuSRgz/5MY4rH7MZb0pXwc/jhGCP9M81o6TblnpwWrj/ADLsqVlBsz90enXDMS8NiIOp0S+j4+sxLBsrdV+zim0UgNraiTi8MYjjArrfzS8Y/PO7cLDwR7MapIYmkc2AGLueGjMdAswaTYapP4PD1VRJWy8gdEQ6D0+WM8FXvLyuhjWNgY2Ia0qT7JzePe3+RjYDZcwi6yzWUEuQAOZPIed8WzUuqZSTRLec5RFmEW4KW3hkGzgjkwPRb4tG8g5/2iq5pabarLk+bVM4bLKuZqeqCkCZALzx2IujHZJANyR4XFt7Xc1rf6jRUbtx+E5j8wV3GueRRxrly1EavIvZyyTs144ym7m1izsNgbgX5npggjJPWUNtKb1ZbPZ5xJ7xGYZHLyxDuyFWX3iK5VJlDAHvWsfP1GK4iLIajQ+h2hStU/8AUqvtBtTVThZPCKc7K/kstgh/TCH7ROIH9RlNo9R+NeSEzYQhTAhTAhL3FUhlMdChIaouZSDYpCtu0NxuC11jB/4l+mHRClXnZ99nyha8/wA1ioaR5mACRJZUG1z8KoPC5sPLFY2GR4aNqFzmbhaoqFjYJ28kp7WWRuyNI7SWDm4l7Q9nHaNAF20kg3N8bBM1tb0pYa5reFLm5UI1xnnIyylSjppJGmkB0F2LvGhNrgncn7KD/wDnGYEEmV4sPCp3fKhxyiq8cB8Milj7SQfl5Bv10DnpB8fE9TiBUnO7UrJUuNSnKIW9cQU1qW8+pJqRzV04upN5o/st+kB0OMU4MZ6xviujhsso6qTX+J4+6YeH87iqo9cZ3+0p5qcNjkEgqEuaB0LsrltrqVZY2RhcMCMXIBFDolgkEOGoXLsgzFqCraJ/zZbSf4HGCJ3UymN2n7RdueIYzDCdveFvldMzELJA9twyG30xvDQ+29cKtLrlnBVeYKwKTs11P12xhwdpnM5+i7nSbM2GZNwHqm72mTf1dQOrYfinZYjxssHRzc+JYFk9lkn5ORf0r4rgh/RJ4+wWjpo/+U1v/X3KB+0TMu1qOzB2TYDzOM+Mq6QMGz3WjohgbE+Z2nwujcOw9nTRg7WXfHRGg5BcKtSXbySkDjTO2qplp4T3dVvU/wAsYZnGSTqWnX/a7XR8QhjOKlGlwuh5Jl4ggSIfZGNrWhoAC47nF7i521fc1zCKCMvIwVR+PkMDnhozFTHG6RwYzVKmXmTMXEkgKUinup/an9L9HywmIulPWbNyfIBh6xkVO9NTw6f87Y2A1XPLaJa4uyH3lA0Z0VEXfhkHMEbgX8L4u1+W48RvVKkGoU4flp81ijNXEDPSvaWI8g9iNRX7SMLkA7XuN7YHExXYbHT93haAQ4VSc+ZVRqzIjTTVlM73gWNNEcZN5FaYGzQsigRj4g19icagxuShoGnbx5b9+yildS/IV1J96GeO48bMLggjkw8ehHljB2o38QpVPC1c7xtFMbz07dlKfvEAFZLeDoVf9ojpiZWgGo0Nx+8EI1haFMCEucK/lnnrT/vm0Q+UMZZVI8nbXJ6Ovhh0vZAZu15n9ohCuOaetkmSSGEPFSWlVGGoVEjXTSFU3GhSTqIsC3I22vAWAEONzbkPyoXrKKWCk7at7Cooo1j1yQl07F2IuSsSsxDgjSNkvcbHA8ufRlQ479vmpSnwhSS11ZLXzAXDXRW3UHkFHki7X8bnriri1zsv8W6cd5WVz85oE+02Zxl+zk/JyfdfbV+qeTYhzqK/VEftUZiivvilVYNV7ICLEXHXFCAUwVC5pxJlUtBP7xTEhGN/IeR8sYJWPhOZmn76LqQyMxDOrk7w0/JKbOGeLIqpQD3ZOq/xGNcUjZB2VjxOHfh3Bsm1LntOyrvLOo57NhOMjBZn2hbeicQGSmN2hBXvgXiK6GnkO4B0k4ZgXh7cu0LP0lhuqOYCxSbmqmOoYjmrgjGCUOinNd5Pmu1hGifBiN25MXGGYdrBD8vmLXxsx5b1LHDbf0XJ6HafqHA6tXngav7JJmt4/uGLYH+w4bjX0U9OgtxjLatA9SgEJM1SDzJe/wDLGMSdZiQ9u0rpTt6jAmLQ0unnjPPxFEIIzuVANumOhi3dVETtXH6OwpxMn/Qa80K9nGVF5jM4uF5X8fHGbBx2L3a7Fs6WnBywR6Nrm9KJ24h4iipVJYgt0UHfGmV4jbmK5kMTpX5WhIeWUk+aT6pSRCpufD0GMbQ+ck/xXSf1WCBay7zt3eS6fDTKqhFACgWAHTG9oDRQLkOJdcr4ym1j/wCcWruVKbELrauNLBm7x5IN2PyGLZwEtzDSqUuIC1DVR5kikIfydUg6obWew+0DY+ot1OHtAcOr36c/yojdQ0O1EuJMhUxzThnel0NMKSnGj3mRruTLIgLuHJGw9d+WIikuG7dKnYOHJaFT7P60xTzUjQvTxyD3imikYFkUkCRLA9wa++FO9mOJxDczQ+tdhP2QEbzT+r1sNQNkntTTeGrdoXP7WqP/AOVfDCmdphbuuPf58FKY8JQgnGNS60rJGSJJisEZHMNIQmr9kEv+zhsIBdU6C/khE6SnSKNI0AVI1CqOgCgAfgMLJJNShJY4tqBmHYM0Ggz9itOAxqNOm4nJ5BT8XK2nrfGnqW9VmFdK12clCHe13NGdoaCLdnKvIPHvaY1P7QL/APxjxwtpyRl+02Hv6fdUldlambI8rWCCOFOSCx8zzJPqcSLNAWZrVuq8pinjKSqCv4jzB5jCZG5hRaYnFhqLJVqRW5edUbGogHRtyo8PHGOQyQmurdq6TepxNu67xNUbyTjemnsrHs38G5fI40MljfZpvuSZsJNDd7aDej1XTJNGVYBlYYaCWlZuK4/nmVyUU3duN+638McuaF0Ds7NP2y9FgsQ3HxmKfvD1HhRMdDxGtXAYJh37WB8f/GOhhHsn72u73XEx2GfhnW0rr7JJKNBKbfEh+v8AkY5gLsPNfYV6R72Y/C1/zFOS159MrssotpZfx5W9cWxjg+QOaa1CzdEtEcbmOsQaeCpeq7SnjVe9oZhcb+mFyzlzWxu2IidBDiZZc2tNhXqkqikMq7gsQP54IsQY2lo2onyzYtklbAD7qzh9lSRpG5Iv4nlh2CeyOsjtRordL58TSBhs/wBlnmkeeX9JzYeQv/LCHvdiJanatETY8BhqbAP/AGp7p1fO0ooBFEPyhGOviJWYdrW0rwXmcLhpcU8yHQntFK1BTS109ibk8z4C/THOia7EykvOn23LvzSM6NgysF3aeO3auwZXl8dPGI0AAHPz8zjpAAWaLLzZc4nM81J1KwZxxTTU47z3b7q7nFHSsb3imw4eWe0Ta+SXIM5ra9rU6iGL+1O5/Z88UbI+TuCg3/haZMNDh7SuzO/xoRTxTDlWTR06kgEyH4nY3Zvn0Hlh8bAwUCwTSGR2YqZjRrLG8bi6uCD8+uGm4WUhLvBLPLS1GWyTSRSUzhBIhs/ZE6lKsRtsGS/QWxeQ3EtK1157flaGOzBAJKdoLVlLQ6YKeUTirMmqSeHSUkLXYu+tWZhyAUDGgHP2HOubUpodnBWXTc9oRVUskatYul42H2WFmRh6MFb5YwxuyOBUr3kGY+8U0U1tJdAWU81bkynzDXHywSNyuIQh+Yjtcwpo/swRyVB/Wb8hH+DS/TF22jJ329z7ISp7Qe20iOsqCsVRUFQkC6lSBAXLMNBeSQkKDzUX5WBw/D5a1YLgbd/74qEU4OzKSWewraSsjCHvhOzqVF9gyDYrfm1h6b4XMwNb3S0+iAlPhqQVuaT1h3RWJTwt+bj/AMA1ftHA8doM/wAR6m5+FkmdV4C6XHHiHFS0LbGl/iN/TCjwTgN6v0gixGx6YoUwJJ4p4GV7yUwCt1TofTwxmlwofdtj6Lo4bpB8Iyuu319Uo5fnlXRtoJNhzVr/AIYzCaWHskei3vwMOKbmjcAd1fYJjm4ip66Ls5V0v0vjoMmif2a2K5M2FxGGcHAVptANPFJOY0TwSc7W+Fh4Y5uIhMElBpsXosFi48RD2xzFq138lsqsurKoRmOHvuLa22XSNtR8/LFZMUyV9ZTceFeS57cQMIwxw33baJiy32d06ANVSvPJblyjW/Oy9fU4q7GQtFGa+C58skkhq5MdBlVMiaFiACgAedtvrjE7GtJcXapDYBSi91GUU7qQYx64Q3FMIOxMMSTM84PkTvQNcHmuNEeIaR2kpplhe0tvRAqWY07nWumUjug+HiMbWOMRzNuKLqGcdI9hxygbDYkjcq6anknktzJ3JOJiifiJOe3YF1J8TFgsPbXdaqeaHOKagi0qNUh546rzDAylRbZtXmGNxGKlzZTfbQ0QDNOLaqpbQhIvyVMc+TEPlswW9V3I+i4oB1szhwv8o1w1wGWIlq7+IS+5/WOHxYXLd1ysOJ6QLxkiFG8r+YXQYKdUUKihVHIDkMalzF8lGLBVIWSYYu1Kck2vf3XNqafklSDTyeFzbR8ywUfXDQKsc3xHhr6fZETu0QvXFOWwJKPfKiaVH1v2RlMVPBCltTaI93KhlVQblmYchciYnuI7AA40qSTzT0c9ntSWokjc3enZqdj49mxVT800n54ViB2yRtv5qQreFx2ctZTcgk/aoP0Zh2n/ANva/TBLcNdwp5fiiFMj79ZXS/daKnHokYlP+KY/TA+zGjmfWnsoVfEPDctRUxTpVNB2MbqmhVLanK3J1AgrpUC1r+Y6kcoY0tLa1UoRWZKuV0dfNHKzNLHc6go/KnWNQsBYFnHd5DSLdcMEnXPa0jT7KEN9mWXqKQkgHtHO36KjSP3YXGSS552lYdXFMc2QE7wTyQn1un904S6Mk94rZE8N/iDzQ2qq83p/spOg6qNyPQYS50zRoCtrG4V+ri07gLKmn9pBBtNTlT1sf4HCmYofzFFoHRcrrx0I5hFqXj+kfmWX1GHsnjeaArPLgcRH3m+RXjOBQ1i31rr6HD3Qh4yupRZmzvgdnFRTmueZrk0kRuO+n3h0xy8Rg3wHMNPVekwPSkWKbkeKHdS3qrchjnqpPd1QyALfW3wwnoxP2gfu9cERdJ37jis+NeyB39MZTwXQ/f4II6eKFu2DSdirAgjUPiLEeHXGPFQBthsXKYSURl53xw5yc2ZqcBsKzyVKrzIGKOLs1CrUAC9JOh5MMWyWqq1VqnBG+jgSgrNxBkEFTCxkVQ6qSj23Ujf6Y9VhWCRoptWVxynMNQuQ0mcsUZE7m/e8W8DfwxfERvwhysJv7Lr9HuZjRmlAJGw8ea15ZlMs7XGyn7RwmDDPxDvuf3Va8V0nh8E3IwdrYKW8wui5BlNHSDUzoX8SQbY6ceHEYo3zOq83NiZpjmlJpuuQESq+MKOPnKD6DA8hneKmOJ8vcHshVR7RqYfAjv6bYzOxUf8AGvktg6MxO0AeIXil4mrqj8xRgA/akNgPXAyWZ4zNaKc0qSCKM5XuNeFx5onFQ1bC886j9GJQP8RxqZmI7VlieGg9lAPaJRH3FnT44WWVWvc3U88aYrPbU8POyRWhFkT4jyE5ktNKhgVezLa3i7RwJFXZASFG19zfe1rWviscnVVBr5003rSt/CXDPuXagTvKJCh74FwVUITcc7gKPIKNzissvWUtSilfZPyeaIf7elZT6wyKw+dpm+mAXiPA/f8A0oX3gwloppDzeqqD8hM8a/4UGCazgOA+ylH8JQkf2w1OmgC/2kyL66dUv/Zh0JpmduaftT3VXaK7hKn0UsC+Ea/jviws0LExMUanrsMUK0ALZER43wspoWLMMkgmBEkam/W2/wBcQTmFHXCs3smrbFJ2b+zsfFA/7Jxmfg4393s+Z910sN0rNF3+0PAeyUa3IKmE95D6r/n92MsmBkB7IzDeupH0nhZhSRwadxr8LGmZzJe0hFuYbcfO+Kx4mVnZafsry4HCOb1mXxqVoyniueGQ0nuzMkvPs1Kuwc/GCOQtsDsLDG1kDWgyEdojVeexMge7KDYbV0pKWmpolVFjhjS5A2AU9d/Hzx5iYzYiS21OZRoWB85SaMtTyagOdueEvwM0bgDzVJJKijUuVmYvfcnGwRhxzFc5z3g5ViXMXHU4aYQVXM8Jm4VzFpDpY7YyYjC6UWnDyuJumHOsvFTTSQg2exKEdGANuXjuPnjr9EYlp/p7QmytpdcPQ9lIhK94bMrbgHcafMDHfxjGyQFx1CzYSQjENANAUZfOJzYa7W5BRjinGTFuUut4L1UXRmG/uBlONSrabLaic2Cu1/EnFfpZ3dotPNQcbhYOy1w5XTRlXs5drGdwo8F540NwIBuarA/pmY9y3l8JwyrhOlg3WMFvvNucamRtZ3QudLiZZv7jq+SMWsLDlhgWfRZpgOuLhLcAg3EFOr08y89UbD8DiziQ0lIfQCyns1qNeWUp+6hT+4zR/wDbgxH90+fndbAmbCVKXuJpOzqKGXoJpEb0aCZv/wBkXDohVrhw9woXrgR9VDC3VtbH1Z3Y/vxE1nkKQj+FIXOPba39Xph/xyf+lIP44Y20UnL3CpJ3SjtJVLHGgKObIvwrfoMMrZZIhZUTcWpHzgnI/wCWcZDiBWmV3kuhFhnOAIc3xKySe0aNeVPJ8xbC/qW/4la2dHSO0ez/APpY5vaa32YLepxV2KYBoU0dFS7Xt8CskntGnPJFGFjG01Ce3ocu0d6/hYKnjWof4gv+flg/5GRvdA8vypd0Ex1nONeB/CyU1aamWOORI7M4BIG/PxxmxGMe5pOUeS0y9HRQRWc4+K6tniaaeSRAFcJsyjew3t6eWNcjS+GpOxefaBmoUg+1GqjMMaixaVg179By288Z+hML1s3XOFkvGS5W5QUjZBmklPKqhrRO3eH4Y6nSWDBBcxKwc9agpnzSRSNS48zADo7VTiGVNQhkEoJ3xqcCBZLjdSxTblQjiQSSSpGpI3Y2vc2G3rjM6KV12j0TY6A1qmbiPMzR0slTo1lFFgDYEmwFz4XOGYTBuZKHHXyWx7wWrhcUhdXZratZb5sb2Hlj2Zja2A13Lkvq14LUx0WaiO1oU6bk3OPNx4gRuPZB5herOCknaO0RbYSEwUHHTxgARjz/APeNP/INcO2PL/azHoSVpOVw8T+ETi9pX3ovp/7xP1kG4+nyqHorEDd6/C2xe0qn+0jjFTi49gP74qn/ABuIGtPX4W2Lj2hbnIy+oOJbimnYUmTCSMNCtCcUUT/DOnzuMaWSB2iyPYRqF6lqUkVtDBtjy9MPpULK8ob7Iz/q5B92WUf9Rj/HEYjvDkPsFrb3QnPCFZJ/tTqTFRrIpsUlUg+quvXyONGGbmfRQUQ4AFsvpx4KR9GYYpP/AHCgJgwpSuc+21f6tTt4T2+sUp/hhrLxyD/r7hLl7pTJlkhMaEdUX9wwwiyyRk0CJwYWVoatJhUjdFPyGKEpwWWbJKdvihT+6MUcAdRVXD3jQ0Q6r4VorEsir54q2CKvcCucXOB/cISlm9DlsXIhjffbA/6VnfaByBKmPFY+Q5YZCTzA+6D0CQPKfdkKyIutCx2JXe1sYZ/p3GjD6LruhxjYs0zj6LonC+eCuoRMyaGIZXS97EXBHp1+eNUwIiNNy4YIJXDs7EizMJH1kbL4KoJAH0xu6MLXYWrVz5zmNChuu/PG6Joa3tKuXq7hGMlqLo0ZNyDcX63x53H4fJIXjRamSZm0K1mVEvcam+ynj6+WKYaAzOoFmf2Sh9UvanXN3mIt5AdFA6Y9NDhmRDKRqqPnIpRGMt4pk7CeimLzCWLTDffRbp/nwGMs2EZ1llqjkc5qWMsiZtMabvIwUD52w17g2OhUFhMraJ09zpUdo5C91Nifs3/hjz8X0xcc59CvTYiXHNa0xC1N4TFk/DNDMPzu/hfG1kWHcKsFVzPr8WCetcQmGHgKjHNS2IMMP+AUfW4r/wCU+i1RcG0S/wC5B9d8R1Mf+IR9Xif/AJHea2R8PUq8oI/7oxPVM3KjsRMdXFejQxj4UQeij+WGta0aBIe951KzVACqx22B6AdMN2LM8ml0I9kq/wCrUb70kx/6rr/DBiLPpwH2C0t7oTlhCskr2upqy/SOZlT/ALj/AAxqwhpJVQUX4KY+7sp5pUVKfSeW3+G2FzjteA+wUo9hKEle16m1ZczWv2ckbfVuzP4Ph0IzEt3gj0VXCoV3ClUXpIG8Yx/LBG4uZUrGy1kwRfT1xBTwsmY8S01OPykgv4Dc/TCJJGt1K1RwSyCrGk8glLMvaOWJWniP6zc/kBjP9QXDsNJW5nRtRWSQN4GtUuVVXX1J37Q36DYYS44l9iD5LZH/AMfh+1mBPNeqbhGqfcrb13OBmBkcbmnNNd/+QYcNoIz6Ldk+VLTVEeuYamJXTbofHF5MNHDcvFQsrekXYoGkbqLT7PZGpq+sonOlX/KRKeR56rfK30wySQmKlLrnyj+pUGyTOOKZ0q5Qw2Junhp/9429GZG4agXJxHfqUrsTjcSCLKwyuC2UEuhg3hz9MUxUPXR5RqqlxDkazCftSsqJ+SS0bNb7fP6WtjL0ZD1LiHIlcxwuskh5+P8An8cdu5rQrGKglb8pDRzqYYlnZoyELGwjkcWN/vEAbD9LGDEtFQXea3QVy12o3wrldRBUrBUqirAGnBA3BYWHe6jnt645mMnyUEd+S6mHw5f2yvMmRNMWeKRW1Enz3OMTMEXtzBwJ3bV1j011RyPYRS2xZ3yWqiNwjC3Vb4UcPM3QEpn1+Fm4eKIZbxdV0+zXYeDDGg4mZv8Acb6UWZ2Awj/7MgB4klOGUe0Gmk2lvE3ny+uGtxMbuCyzdGzRCo7Q4Appgq0kF0IYeIN8PaQ4VBsue6xoVXKDhgSnIHxJUCOmme/KNv3HFyKiiQ9Xezym7PLaVSLExBz+3eT/ALsRiDWV3NbUxYShLfGCa3o4f7Soa/otPUN++31w6Gwcdw9woVvDhKz10R6TiRf1ZIoz/wDYHxEl2tPD3PtRCP4UpQvijL/eKSohHN42C/rWuv8Aiti8Tsrw5CRPZhXtJRaEI1I5He6A94bYaGhjnMOwrEQQ4gJkqMleb87UyW+7HZR+Av8AjjM+FxcTmI5LVFLlFwDzCto+C6FdzFqPixJP44q2Jrdb87p5xEh0OXkaIzTZVAnwRIPQDFwA3QUVC9x1JPiramaOJSzlVA6nE13lVpwXOuJ+OS4KQbL949cY340A0j1XXwnRT39uagbzulSipZ5XDKCSDfUdsZo4Xzv+fldCefD4SPLbwomzPKZ6oRTU7hKqnJIJ6+K+hxczmCXK6/qFyzEyVhItXQ6FIPEmeSVdWGmh7NkTQyautz3vxx2sI1ojK5OKb1feCK8R0dKtEoSArMLXk3ufXpjLBis8haFsmwzGwdYOCSFJGOpGSO0uaAHXVwrH0lNR0EgkdL+PrijxmNVQRAuTrntHS+5xmCFllFrtv3vW/jjmw41z5yyunqupL0eBDmRjg8U9K691pqx0+yPycN7bE9CdrnnhmOnc+g96LNgYC6tUYzORxC0VwamS7OQdvQeQG2OMyOV7sjDfbUrsMeyFwe7uhI8Ms1M9xqRgdweWJDpIHrqPjgxsfaAvtFKroXDfGkcto57BvPkcdOOdkvdsfRedxOClw13Crdm0+KbZaCFx3o0IPkMXN9VnruQqq4Oo5PiiA9NsUMbD/EeSazESt/meRJohicEJGdVNUTQn1uPpbFPp6aOI4DROOOq2hY3nS62otYmzvHMviLo3z5g4e0PFrLHIYjepQD2iSsaQQrcPUSJCoPO7MBjTFmziuy/kKrMG1cF0CmhCIqLyVQo9ALDGYmpqtSsxCEBrSXzKmUcooJpG9WaKNPw7TDW2jJ4j3/ChfJPyeZqelTTlfLVC+oD1Kyt/cOJ1i5H7/wClKP4ShTAhcmyhPcc4qKY7JNd4/CzXcfQ6k/ZxofctfvFDzH4WaZtHZl0SCx8sQ5Q1aUI5HfFCmjihnEHEsFIp1G79EHP/AMYzyTNZ3itcOEll7rbb0gTSV2ZPcKQnToo/njK9smIoQKNXTYcJgx2u0/xH4TLkvs+jTvTnU3gOQw+LDRsF7nyWXE9JTz2Bo3dY+yx8YZxDAOwp1UN1I6YZicW6FuQa/YJWA6OGJkzkWG3eUq5HmE0RaSxKD4z4X545bInzd1djFvw0FA8080R4hoIpYxKEBJIAcbH5+OG4WWRoLSkSxRzNFbr5xFHelQPuNS3t4Ab4OjpmxTkvG9Z8fF1kIjj4JfTIIHW4mVfANtj0I6Rw20rjf8Zi2k2+y8Pw3CBc1CHw03Nz4Yo/pDDUNCpZ0fiw8Vb9kzZgf6qgUctJJvvsMeczt60yx3ovRdWcgDzSnqiFLJFTRdpbSzC/ixJwPkdK/NmqUt1GMqRbalfMaqdZu0ZSrDl5jnv54uOtwzw52q1xRwYqEszWO3cnvImpswi0OoDgb+OOoJBOypvvXBfHNgpSGHLuNr/dCs59n0i3aA6gN7dfljE/BitWmi6EXSzx/eGb0+wVOQcV1FG3Y1SsU8/iX+YxInex1Jv3yUy4KKVufC3G39K6TQ10cyB42DqfDp642AgioXIcCDQr1KRi4SzRZJmHhhjQUpxCU4196zeNOcdGhkfw7R+6g/ef2cXzFsTuJoPufZTCLkroGMq0KYEIBkY7StrZ+imOnX0jUyNb9uUj1TDn2Y1vM+dvZC+caLoijqgN6WVZj+pvHL/0Xc/IYIbkt3inx60UFHwb7jCVK+4ELnvtcypuziroR+UpmGq3VCRYnxCtb0DNh8PaBj33HMfOio9uYUVdB7QaJgvaMyEgc1Nr9Rf1xXrW0WfKW0tXkihzqaqBWh06ORqG5D9ReZOFu7Wi3xNiYM0hrwBv4q3KeC4EbtJiZ5DuWfcX9MJbA0Gp1THY2VzcosP3amqJAoAUAAdBhqzpa404lFMmhCDIw5fd88KlmbEKnVacNhJMQ8NbYbSkHh/h2ask1NcJfvMeuM0WHdLV8n5XWn6QZhR1UFx4FNHF3ZUdMIYwNTC3n/5xtll6qKrbbAuNBhnYzEZXVO0rn2W1Mid0EmInryBGOU2o7VF2cWxodlYUbq6oCne6m5B0+Z5bYGZZDl2qXO6mPNuWDOaTs44FI30b+vM404uEwxsB1uqdET/UzSPdwXylS1MH030zAkdbbA7YGQ1wpf8A9lTGThuNyA/xRXNqlb3UbW2vy+XzxiBGewUGpaKlL81VMZFkkvtugPKw8sXczqnC3Fa8O0Txmp3j0XSoMrhzCmDCwe3P+eOvNknaCV52PrcK8tGoSMyVGX1AO4IPyYfxxzssmGfXZv2f7XfzQ4+HL/Medtu+i65kGcJUxLIh3PMdQfTG9r2vFW/65rgPjfG7I/UK3MMshmW0qK3qN/rixAIoVDXlpqClRuFJ6V+0oJTbrE57reV8Zhh3MNWHzWt+LEraSDyoEUos+V7iYdhIo7yubD1VuRGNMT8wuKc1hlZR1AaobmfGFHGrHtlYqCbC5ufC/LD67G6lZiLrX7OcraOmM8o/LVTds9+YB+Bfku9uhY4idwrlGgt8nzWlrcoomvCVZZ8xrFhikmc2SNGdvRQSf3YlrS4gDahD+EKJoqSMSC0r3ll/5kjGV/ozEfLF5nAvNNNByFkBFp4VdWRhdWBBB6gixH0xQGl0IHwdMwhamkJMlK5hYnmygAxP56oihJ8dXhhkw7WYaG/z6oR7CkKuohV1ZHAZWBVgeRBFiD5EYkGhqELhVXlCUVXJSVCgxN3opHHNTyOrx5qfNfAjC8dGXATR7deB/KmN2R3BeYYhDJroa5Ym+6W2Pkehxjjmkb3gh8TCatRoZ7nZFlmpQOrAL9cOdjWCxCkQuQHMcwkju8mcSGX7sVyPpyxAmkPcFlYxx61ugP8ATczydoZ0mb/igi/kb4HRB93D3TmYuSNhaw05LoNF7UZqdAs+XFUA2aJu6fqLfjjVma7UrJSgtqk/ifjgVUxk0Mq9FJG2M88bpSNwXS6PxbcJU0qT6cF6qOMojTLDFSsHVw3aM1wbcxYDrhrmtLMoWMyudJncVkqOPKgjT2UQXl8P8cJbhmtIIT34tzmFhGqJ1fFUdZoAj7J1G4vdW2G48N+mLdIOzsady0dBNbHKWb1TLxisEDU8cetybl2OyG97AdcWw7ndTkKy47K7FF42WQ6fjarkUqyxlTtslrfMYUcOyqPqH5aAIjnHGayxxqaRo2RQNQJsbC17EYZNGJWAbfZGHxToDbRbuDfaQtJqV4ndD0Ui4+v+d8TC0sblKMZOJ3h4FN6MZzx3JXRlYcsdgPtyGwXzuBb8cWcQ5uV2iRG50bs7DQ/tkp0WdVdM5C1UcOr4ghD2/fY4Q0COzASmzTfUdp2v7tTPS+/SWlgzcyHnY8vQrhP1rmGj2pDmjYiS8S50BZkp2t9r+Nr4uOkIv0JdHINX01VVMGrJwwHwottvphUuMBFW6qaZW3V3DvD0dXWLEqXp4LNO3PWfsxk9bnmPAHxGN+B6xkXXSamzfc+wVGCpzLtGLpqmBCXeKPy0lPRD/et2s3lFEVYg/rSGNLdQzYdF2QX7rDmf0lCY8JQpgQlzOf6tVRVY2jl009R4C5PYyH9VyUJ8Jf0cOZ22Fm0XHuPfwQmLCUKYEJa494WWvp9IsJku0THx6qf0W5HwsD0wyN4bUO0Ov7vCgiq4aq0kd46mmlEiEq+lrEEc+7jLNDLG+gNtnEKY3BtnL5HT5c5stRNF5MNj5Xwkulb/ABqmsptTVknBNHYO15r8u9t/hxnfiptjVfK1F5OEMuIs8SIPHWR+84THi5i/tA08FOQHRA854cjpkvRVzrfbsy4Zf38savqAdWqsbHE6rNlPDeYKRIJ6Nb8jKYyfoQcMEjToEOc5xykrdxNw7mIg7R8wikW9tEQCrf1Wwwx5jHeVYg9xozalHhzN2p6lVqY1liYhJEcA7Ha6noRe98XY1hu1TI6QWcvdVl6QZjPFHvHG7BfTmB8uXywrF2ZRbuiB/wCQCt3AmWQy5owqV1Rxo8pU8jpAIuOosb/LDou61YsV/efzKE5nnctRUO9OojUsdCoAAB0J87c8RK2Opc5ETpSMrF0mgyzPxCrdvSyqyiyShTt4atP8cVa2MiyU4EG6Vs2yjNIX7V4YE3uGj0lQfxwhzYWXNU5j5HjqxoUwU/CtTWRq9ZmDMjC/ZxWVR5Hp+GKDEj+ISHgtNF7m9m9CosBKfPV/AbYS/FTVt9kGwS5mXA/YuHhmZF+8enqRbEx9IOdZzFYhUSwqNp8zLeSFj/4w8PJ0YlusqYMtSaRIaN5JZpDYX2A8Sx+6BufTGnDwukdV4o0a/A4lKu402Lu/C2QR0VOsMe55u/V2PNj+4DoABjTI/Oa+XAJyL4ohfHcAEk2AFyTyGBCX+FFMxlrmB/rFhCD9mBb9n6ayWkP64HTDpezRm7Xnt8tEJiwlCmBCor6NJo3ikUMjqVYHqCLHEtcWmoQhHDFa410k7Xnp7DUecsZv2cvqQLN4MreWGStHfbofQ7R+7EI7hSFjzXMFgjMrhioI1FRfSCQCxH3VvcnoMVc4NFSmwQumfkbrs48OZ2cUpce8He9AVdLp95UA9NM69ATy1W5N1Gx2sQ5pa9vVyab93FJeytiknLY6OpBWSnRJV7roV0kEc9v4Y5GJbNhn0Oh0Owp0RDhQr1JwNHcmnnlhv0Um378VGKP8hVMMYC8x+ziNj+WqpX+X8ycBxtNAEvLdTK/Z5SyyNZpeyXbVqsWPltiRjXHZ6J74mMbUJgX2WZcRv21/HXv+7F24w6U9FmyjWqTeL+CpMvKtSztIjXPZnmLeIvZvph5ex1npkIfdzdiyUNIMzrKRIVKlUXtzbZdLEsT6iwHrh7GMZZqU5znGrl8WMyz19QB3e2Kg/tN/ADCcUCW1XQ6MdSeiM5NRmPOIFOy1VMy/JkZf3rfGhoo1vILDMayO5n7pSEJojUwyqe3VlRBY7i5ufMEWPzxSWPMRuV4ZnRg5dqcuGeCKyvjWarrJI4uSopJaw8rhVH1xAy0tRLkLq9rVG6n2VwKLLVVIHmwI+lhjLJPl0HooGYXqlul4D/LPA1XLGw3U72Yf3hhIxg2tCvkqKrT/AKH18V+xzAkfpav5nEnEwHVqSb2K8nhaSSxrKqSQfdXZfrhTsY1vcbTwVQ5U1GSUsTLFDAZp5CBHHcknzJ6Ac7na2NGEE+JNSaNGp3flBvonzgnLKagWUvdpx+flWJ+zj2DaEbTbQo3J68z0A6T5WUyNs0ftTxWpuEko2lO1pcVOzStU55fWJNGssZJRxdSQRceNjvirSCKhUlidE8sfqLFaMSlpb4jc1Mq0CHusA9UR9mK+yfrSkaf1RIfDDo+wOsPhz/H3ohMiqAAALAbADphKF9wIUwIUwIQTiPLZG0VNOB7zBfSDsJUNtcLHoGsCD0ZVPjdsbh3XaH04oW7KMyjqIlliJ0t0IsykbMrD7LKbgjoRij2FhoUIJxjAzPAYRIakFhEB+bAOjW019uz02U9Tq2F+WeUG1Nf3VdPo97Q14kpktm/y20DeNb7rXstmSUXuVORNPqRTquQFWMG11Hgga5F+QNumLMb1bblJxMv1cwLGUJtvJ4njv3m6WeIcnpsxlZ6V2hrI7lZChCThSFO9rSKDZdY3G3MWGGsmY8GJ4q39uClTYOSNge6nmCQTpXcab0Cos5eKT3atUwzDkW+Bx4hhsR5jHNxmBkjGePtM37uYSWzUs+/FHZmJTSuxbb9UdWvjmlgArtWptBcIhQoqKFXkPx8/njS02S3mqIQNiWNulFLXEE6msEj/AJumjMr/ACvYEeeHEEyNWmN2SJzv8xTyS97Iq4rVyiRAhrYzNFbydgQPLy8sdKnaWGtqIblbgUddTsLSxVZZvEgnT+8HFZrRP5LbgHUxDDxR17S51l8MYuaaHVIR0upNvlcf3sXaLN5BZJTVzv8A9j90K49rkfNhL2YaKAxwytbbU4a1/S/4YJW1ahrtAnngVikEkRNzHKw+RsQcYoeywjitePkzyA8AjVXJucZ5e8eKx1QXOKa4WVfzke48x1B+WMbmhNa6gVcswYA/5HriuVIc4EoAauWolMFCnaSD45D+ai83bl+yN8dHC9HOeOsm7LfU8vlVpm00Trw5w3Bl8byyOGlIvNO+23Ow+4g8PIXvjqvkGXKBRo0H7qeKdHGXEMYKkoBnOeyVF30WpFLKiNtrmUBoveQbGOJmIsDse7qsDjC6Quvs99leC9Dh8IyDs1/qGhJGxh72Te4DU7L5bhGuEcvkisI3k7MreaKaNlKyG5LRGwWxa91W6+B3w2Jpbp48+Cw4+dstS4Cv8S01q3c7bXcTfejOf5sKePUF1yOdEMY5yOeSjwHUt0UE9MaY2Zzw2rlrzw9lRgjJkYPPK3aTSWtqcgCw8EUAKo6BR1viZH5jbQaIRXC0KYEKYEKYEKYEJbzSneklargUtG+9VCouTYW7aMdZABZgPiUDqBdzSHjI7XYfb90QjtHVJKiyRsHRwCrKbgg9QcKIINChAuL5309ncxwFSaiYbkJcL2cYFyZHJte2wO1zhMpOmzaf3eujgGszZ9X/AMW8d54N148ktcNRVSujQQ2hjYs8JdhoLArojEqh0YB9TIe62lSp3wmMOr2Rb93/AOl0sa6BzSJH9sigdQXptOU0INKAjtCpBFk755kdPVx9nURh15g8mU+KsN1PpjcyRzDVpXnEhVnC9fQ3NK3vdP8A2bbSoPAdH+Vj5YVLhYJ7jsu/9T8KG1aKBfcq4oglOgkxSg2aOUaWB8LHGSbByRCrhbeLjzVS87UxwS8j/HbCYxdSHJU4yiJoK6Veb2B/UU6TjRC2rzwTXOJY1m73QbiW8FFlVbDs0GkXHUML/vv9cbSFnaakheeJodOaho/hq4VkYD5b/h+JxTFN7NE7DPoQ5auCqnsUzPMX3dWZF8tP/kqPlhkY7N0uQ1kQuel/1BLPIbyVE4lJ6k6iB/H64kjsqoPbougcOxlLFtu1giY/rBdJ/hjE5tJcvCqsXZm5jvROsbkcZ8THSioHJczHiWJX7KPXPMeUUI1t87chiIOj5ZRmpQbzYfnwU1LtFbQcIVdV3q1/d4f7CJru3/MkGy+i39RjoxQQQXaMzt50HIfKlsdNUYzuVMvSCKG1NTksGMaqzlrXVVVgbs5vdyG5C9r3xSeV1QXFdXAYYTB9G5nClAbCm0kimm6o9KIDnFZUuS0odxTGORoW0aTqPdWUqBrnI3VUUqp031E4zvc43OzZ88V1MPFC0UZQZ6gOFa21LQdGD+RJqRWlFvyvh4zoOzm10kgW92YOQG1yK8YGlpXcWaQm4AK2xdseYWNv2vjxWebG9U7tNpIK7BS4oCDqGgd1ottqm3MK2Gkg1udMaAAAXJPRUUc2YmwAG5xqYwuOVq4bnEkkrBkeXyPJ75VLaVl0xR8xTxnfT5yNsXbyAGw3Y9wAyN028fxuUI/hSFMCFMCFMCFMCFMCFMCEs1NDJRSNPSoXgclpqZeYJ3MsA+8ebR/a5ix5vDhIMrtdh9j7H20hFVlhrKfVE4ZHF1dfskG4NjyZWA2I2K2Iwh7COyUyN5Y4OH7vHircuoFiDWuWdi7kkm7G3LUTpXwUGwxVrQFaWV0lK6AUGmnhSp3nal3iXM0SZXWZ4iFYdoo7SHuMAyTRj4bFh3tiNVrjkVSOANa0+3iuhg8O58ZaWB1xY9l1xYtO3TS/Jfct4zUqq1ae7SGNXBbeKzg6SzD82TY917cuZwNmH8rKZuiyCTAc7akW71taDbzFfBa/6Kgr4QK2CJ5FurFeh53jf4grKQw35MMaIZXtFj8Ln4iNrH0ZXLsrryPEGyCTez+WI3oa6SMdI5R2iegOxA9dWLO6p/fZfeLfj0WYsBWCvoM2WN4paSGpR1KkwyaTv10vb1tgbDEDVr6cx7j4UOa46FKOYx1Qyv3CWjqu0RgUfsWKWBJALAEXsbYb1LiLFp8flABDqq3Lc0j96WapSVBFTxwxjsmJuLamIttvfEmF7rkV8R8qAKCl1kq638nmFPTxyvHUOJIiI2uCSC4ItsNsSIX0I08R8qaVIKI1cVRUUtHSRUNWUhKtLqiKB9PRWYAWuTiXx0Heb51+1VAYQapwEGbzEaaanpQBYGWTWwH6sdx+OEmOKtXOqeAp6n4R1Z2lX/6DFwXzCtlmUAkon5GIDmbhTqIH6wwdYxvdaOZufW3ortjFaAVKK5DV5fDH/V4+witq1mF40YWvqMrKA23UnfCTP1nacT4rY/BysOUgE7gQTyoCSsmY8Y3KJSpq7RwiyvcId7FkTZ5gvMlQFHjhLptjf35WyLoygc6Y0yipA15E6NJ2VvwTFV0EcqaZkV7qVJ0+Is1r3K39cOLQRQrmxyvjdmjJF6+WiF5NkWkD3lEkkjYCOU7s6p+bZxb84vib77g74WyP/L93LViMXU/0SQDqNgJ7wHA/ax0RHN81ipk1yk7nSqqLvIx5IijdmPgPXkMPYwuNAsKG5Zlcs0oq6wAOv5iC91gB21E8nmI5tyUGy9SWOeGjIzxO/wDChMOEqVMCFMCFMCFMCFMCFMCFMCFMCEv5hkkiSNU0TLHK28kTfmZ/1wN0ktsJF35XDDbDmyAjK/T1H44fZC05Pn0czGJlaGoUd+CSwceakbSJ+mpI9Dtir4y2+o3oWSq4SgdnYixkkDNYfEvcZo2HKzOuokWJ5HzzGJpW9nSMzGgA6Cg4G4B5gG25VDI5hFIxnEc0kxklfSGXQLqsdm2KCO3PzxGQ0N71V/q487Rkq1raAVoa6k221SzlMUsMSzp28YnLyf1ZF7FEXQqloHJA1L3+6dW/lslgIGYVvu08l1MQ5kshidlOWje2TmJNSaOFNDa9k5cMV9RLTLNOqXZdadncFlIut1Y2Vj4XI3HLGiNzi2pXFxsMUc5jiJoLGuw7bjUeCqTjCkuVkaSJl2YSxuuk2BszW0g2I69cR1zNquejMRQFoDgdKEGvIVr6IjS5zTSfm54n/VdT+44uHtOhWd+Gmj77COYK0TVAVWYd6wJCra7WF7DfmcSTZKa2rgDZfYJ9SK5BTUAdLWutxexsbXGAGyHNo4tBry2oRxFxHFBDIySwmVVOhGcbnwsDc+g3OKPkDQTULZhMDJNK1pa7KTcgbENg4tKKxa9UFUsXggkQCwud3JRha5uG6cjigloN/ILQ7o7M4AdippRzgftceI8VizjiqcqBoihVghYNqlcRyME1sEAjXY3szm4B2xV0ruXr+PVPw/R8WbUuIrSlGjM0VoK9o+DRRD/6KkQWCPVT0U6qI3buNCUOghD3V7pG6gtqQ898UyEcSD6LR9QxxuQxkjTcC+atxXU32EgUK3w8NVBujxx3SUOLMwjkicl3p9VidKyd7vLY8rWJxcRO0P6Nyzux8I7TSbimgqHCwfuqRaxqNdQE2ZFRtDCI2v3S1rvqNixYC+lQLXsABYADD2CgouTiZBJJnHDZTZTeddTxWTNOIArmCmT3ip6opssf6U0nKMeW7HoDh7I6jM6w/dEhfcoyIrJ7xUv21SRbXayRA80hTfQviTdm6noB8lRlbYffmhG8KQpgQpgQpgQpgQpgQpgQpgQpgQpgQpgQsGb5NDUqFlW5U3R1JV4z95HWzIfMHF2PczRCFdpXUuzKayEfaWy1CD9JNkm9V0t+iTi9I36WPp+P26hE8pzqnqQexkDFfjQ3Dp5PG1mQ+oxR8bmd4KVZmOXrLA8FyiuhTuWGkEW26cumFObUUTYZjHK2XUg1utUaBQFAsALAeAG2LJZJJqUhTcP1CIYxLJIslVGJw6amZdUelhLcHSIgoPxbhhcb4ymNwFAdt/3ku63GwvdmLQCGHLQ0ANDam/MTTS1NV8eiSWqjjqyzv2kr9l7unZgLr0AuFDMrIQRcsCV3scBaC8B3HYpEz48O58FAKNFc5relbVpUG2gsbVCBf0NEaeSVYNMSLpEjpokZ3mTYr0MaloyR3TfblsrIMtQLfn2W/wCrkEwY59XE6A1AAadv/Y0I2jauoT5VC0PYGNTFawQi6i3KwPh09MbS0EZaWXl24iRsnWhxzb9qS8ryd4pqeF6ZYx7tLA0ihbStZW1d3kCF2LWYktttjOxhBApsouzPimyRySNkqc7XAGthe1+egqBa60U3Dcs8MDuE7T3dIWE6FjAUuGeNTtrPnb4QbkbYkRFwBOtKX2Jb8cyKV7W1y5i7smmaugJ3D3I4onFwr2lLDT1LkrErIVQ91wLrGzGwN1WxA5avGwxfqqtDXbFnPSBZO+aEULjWp1G0gX2m3LmUbpMuRCH3MmhYy5+JwvLVawJvc3t1OGBoF1hfM5wy7Kk02Cu5Zs14gp4GCO+qU/DDGC8reiLvbzNgPHDWxudcab9iUh5p62r/ADhNHAfsIwNQ4/SkHdh9E1N+kMXqxmlz6fnx8lCNZZlsNOgjhjVF52HUnmSebMepO5wtzi41Kla8VQpgQpgQpgQpgQpgQpgQpgQpgQpgQpgQpgQpgQpgQhmbZDTVBBljBdfhkUlZE/VkUhl+Rxdkjm6H48kLB/RtfD+YqlnX+zql73oJo7EerI5xfNG7vCnL4PyEKf6QzR/7TQzpbm8Np0+Wj8pb1QYOqB7rh42/HqoVsHF9AxC+8xox5LKeyf8AuSaW/DEGCTd7oXsZZFJUrUrIG0jYX1W2K91g3dFibi2+EGPtZitTcSRCYt/7ffw3IoKZO/3R3zdgdwTYLuD5AYmgSM7rX00VuJVVTUVcaC7uijxZgP3nEgE6IQeXjKgFwtQspH2YAZm+kQbDBBJtFOdvuoqvBzyqk/2ahk8nqGEK/wB3vSf4BieraO87yv8Aj1UqHJqub/aqsqv9nSjsxbwaUlpD6qUwZ2N7rfO/pp51QimVZPT0ylYIlS+7EDvMfFmO7HzJOKOe53eKFuxRCmBCmBCmBCmBCmBCmBCmBCmBCmBCmBCmBCmBCmBCmBCmBCmBCmBCmBCrnp0cWdVYeDAEfjiQSNEJQ4i4colsy0lOrE/EIkB+oXD2SyG2Y+ahcZzarkVrK7KPJiP3Y6cbQRcKFs4bmaSRBIxcFgCGNxz88VmAAshdi4d4corB/dKfX97sUv8AXTfHNkmk0zHzUpoiiVRZVAHgBYfhhFVK94EKYEKYEKYEKYEKYEKYEKYEKYEKYEKYEL//2Q==",
};

const education = [
  {
    degree: "Master of Computer Application (MCA)",
    institution: "Babu Banarasi Das University, Lucknow",
    shortName: "BBD University",
    duration: "2022 - 2024",
    description:
      "Specialized in advanced computer applications, software development, and modern web technologies.",
    achievements: [
      "Advanced Web Technologies",
      "Software Engineering",
      "Database Management",
      "Project Development",
    ],
    color: "from-blue-500 to-purple-600",
    logo: collegeLogos.bbd,
    website: "https://bbdu.ac.in",

    location: "Lucknow, Uttar Pradesh",
    highlights: [
      "Completed major project in React.js & Node.js",
      "Participated in coding competitions",
      "Published technical papers",
    ],
  },
  {
    degree: "Bachelor of Computer Application (BCA)",
    institution: "Prof. Rajendra Singh Rajju Bhaiya University Prayagraj,",
    shortName: " Prof. Rajendra Singh (Rajju Bhaiya) University",
    duration: "2019 - 2022",
    description:
      "Foundation in computer science, programming fundamentals, and software development principles.",
    achievements: [
      "Programming Fundamentals",
      "Data Structures",
      "Computer Networks",
      "Web Development",
    ],
    color: "from-green-500 to-teal-600",
    logo: collegeLogos.prof,
    website: "https://prsuniv.ac.in/",

    location: "Prayagraj, Uttar Pradesh",
    highlights: [
      "Class representative for 2 years",
      "Organized tech workshops",
      "Top 10% of class",
    ],
  },
];

const Education = () => {
  return (
    <section id="education" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Educational <span className="gradient-text">Background</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Strong academic foundation in computer applications with practical
            industry experience
          </p>

          {/* Animated underline */}
          <div className="mt-4 flex justify-center">
            <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full animate-pulse"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {education.map((edu, index) => (
            <div key={index} className="relative group">
              {/* Animated background glow */}
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${edu.color} opacity-0 group-hover:opacity-20 blur-lg transition-all duration-700 rounded-3xl animate-pulse-slow`}
              ></div>

              {/* Floating animation container */}
              <div
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform group-hover:-translate-y-2 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Institution Header with Logo */}
                <div className="flex items-start justify-between mb-8">
                  <div className="flex items-center space-x-4">
                    {/* College Logo with Animation */}
                    <div className="relative">
                      <div className="absolute -inset-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>
                      <div className="relative w-16 h-16 rounded-xl bg-gradient-to-br from-gray-50 to-white p-2 shadow-lg border border-gray-100 group-hover:scale-110 transition-transform duration-300">
                        {edu.logo ? (
                          <img
                            src={edu.logo}
                            alt={`${edu.shortName} logo`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.style.display = "none";
                              e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center">
                                  <FaUniversity class="text-2xl bg-gradient-to-r ${edu.color} bg-clip-text text-transparent" />
                                </div>`;
                            }}
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <FaUniversity
                              className={`text-2xl bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                        {edu.degree}
                      </h3>
                      <div className="flex items-center space-x-2 mt-2">
                        <span className="text-sm font-medium text-gray-600">
                          {edu.shortName}
                        </span>
                        {edu.website && (
                          <a
                            href={edu.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:text-blue-700 transition-colors"
                            title="Visit university website"
                          >
                            <FaExternalLinkAlt className="text-xs" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Duration with animation */}
                  <div className="flex flex-col items-end">
                    <div className="flex items-center space-x-2 px-2 py-1 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full group-hover:shadow-md transition-all duration-300 whitespace-nowrap">
                      <FaCalendar className="text-gray-500 text-sm" />
                      <span className="text-sm font-medium text-gray-700 py-2">
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Location & Highlights */}
                <div className="mb-6">
                  <div className="flex items-center text-gray-600 mb-3">
                    <svg
                      className="w-4 h-4 mr-2"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-sm">{edu.location}</span>
                  </div>

                  <p className="text-gray-600 mb-4">{edu.description}</p>

                  {/* Highlights */}
                  <div className="space-y-2 mb-6">
                    {edu.highlights.map((highlight, idx) => (
                      <div
                        key={idx}
                        className="flex items-center text-sm text-gray-600 animate-fade-in"
                        style={{ animationDelay: `${idx * 50}ms` }}
                      >
                        <FaMedal className="text-yellow-500 mr-2 text-xs" />
                        <span>{highlight}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Key Focus Areas */}
                <div>
                  <h4 className="font-bold text-gray-800 mb-4 flex items-center">
                    <FaAward
                      className={`mr-2 bg-gradient-to-r ${edu.color} bg-clip-text text-transparent`}
                    />
                    Key Focus Areas:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, idx) => (
                      <span
                        key={idx}
                        className={`px-3 py-1.5 bg-gradient-to-r from-gray-50 to-gray-100 text-gray-700 text-sm rounded-lg border border-gray-200 transform transition-all duration-300 hover:scale-105 hover:shadow-md animate-fade-in-up`}
                        style={{ animationDelay: `${idx * 50 + 100}ms` }}
                      >
                        {achievement}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Animated bottom border */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-1000"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section with Enhanced Animations */}
        <div className="mt-16 relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-gray-900 via-black to-gray-900 opacity-0 group-hover:opacity-20 blur-lg transition-all duration-1000 rounded-3xl"></div>

          <div className="relative bg-gradient-to-br from-gray-900 to-black rounded-2xl p-8 text-white overflow-hidden">
            {/* Animated background pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full -translate-x-16 -translate-y-16 animate-pulse-slow"></div>
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-green-500 to-teal-500 rounded-full translate-x-16 translate-y-16 animate-pulse-slow delay-1000"></div>
            </div>

            <div className="relative grid md:grid-cols-3 gap-8">
              {[
                {
                  label: "Master's Degree",
                  value: "MCA",
                  sub: "Computer Applications",
                  color: "from-blue-400 to-cyan-400",
                },
                {
                  label: "Bachelor's Degree",
                  value: "BCA",
                  sub: "Computer Applications",
                  color: "from-green-400 to-emerald-400",
                },
                {
                  label: "Industry Experience",
                  value: "1+ Years",
                  sub: "Frontend Development",
                  color: "from-purple-400 to-pink-400",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center group/stat animate-fade-in-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div
                    className={`text-5xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent transform group-hover/stat:scale-110 transition-transform duration-300`}
                  >
                    {stat.value}
                  </div>
                  <p className="text-gray-300 mb-1">{stat.label}</p>
                  <p className="text-sm text-gray-400">{stat.sub}</p>

                  {/* Animated underline */}
                  <div className="mt-4 flex justify-center">
                    <div
                      className={`h-0.5 w-8 bg-gradient-to-r ${stat.color} rounded-full group-hover/stat:w-16 transition-all duration-500`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Floating icons */}
            <div className="absolute top-4 right-4 opacity-10">
              <FaGraduationCap className="text-6xl animate-float" />
            </div>
            <div className="absolute bottom-4 left-4 opacity-10">
              <FaUniversity className="text-6xl animate-float-delayed" />
            </div>
          </div>
        </div>

        {/* Achievement Timeline */}
        <div className="mt-8 md:mt-16">
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-6 md:mb-8 lg:mb-12">
            Academic <span className="gradient-text">Timeline</span>
          </h3>

          <div className="relative">
            {/* Timeline line - visible on all screens except very small mobile */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 md:w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500"></div>

            <div className="space-y-8 md:space-y-12">
              {education.map((edu, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot - responsive positioning */}
                  <div
                    className={`hidden sm:flex absolute left-1/2 transform -translate-x-1/2 w-3 h-3 md:w-4 md:h-4 rounded-full bg-gradient-to-r ${edu.color} z-10 animate-pulse`}
                  ></div>

                  {/* Mobile layout (below sm breakpoint) */}
                  <div className="sm:hidden">
                    <div
                      className="w-full px-4 animate-fade-in"
                      style={{ animationDelay: `${index * 200}ms` }}
                    >
                      <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                        <div className="flex items-center space-x-3 mb-3">
                          {edu.logo && (
                            <img
                              src={edu.logo}
                              alt={edu.shortName}
                              className="w-8 h-8 md:w-10 md:h-10 object-contain"
                            />
                          )}
                          <div>
                            <h4 className="font-bold text-gray-800 text-sm md:text-base">
                              {edu.degree}
                            </h4>
                            <p className="text-xs md:text-sm text-gray-600">
                              {edu.institution}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center text-gray-500 text-xs md:text-sm">
                          <FaCalendar className="mr-2 w-3 h-3 md:w-4 md:h-4" />
                          <span>{edu.duration}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Desktop/Tablet layout (sm and above) */}
                  <div className="hidden sm:flex items-center justify-center">
                    <div
                      className={`w-full md:w-11/12 lg:w-5/12 ${index % 2 === 0 ? "pr-0 md:pr-4 lg:pr-12 text-left" : "pl-0 md:pl-4 lg:pl-12"} animate-fade-in`}
                      style={{
                        animationDelay: `${index * 200}ms`,
                        marginLeft: index % 2 === 0 ? "0" : "auto",
                        marginRight: index % 2 === 0 ? "auto" : "0",
                      }}
                    >
                      <div
                        className={`
                relative 
                ${index % 2 === 0 ? "md:mr-1/2 lg:mr-5/12" : "md:ml-1/2 lg:ml-5/12"}
              `}
                      >
                        <div className="bg-white p-4 md:p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                          <div className="flex items-center space-x-3 mb-3">
                            {edu.logo && (
                              <img
                                src={edu.logo}
                                alt={edu.shortName}
                                className="w-8 h-8 md:w-10 md:h-10 object-contain"
                              />
                            )}
                            <div>
                              <h4 className="font-bold text-gray-800 text-sm md:text-base lg:text-lg">
                                {edu.degree}
                              </h4>
                              <p className="text-xs md:text-sm text-gray-600">
                                {edu.institution}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center text-gray-500 text-xs md:text-sm">
                            <FaCalendar className="mr-2 w-3 h-3 md:w-4 md:h-4" />
                            <span>{edu.duration}</span>
                          </div>
                        </div>

                        {/* Connector line for tablet */}
                        <div
                          className={`
                  hidden md:block lg:hidden
                  absolute top-1/2 transform -translate-y-1/2
                  w-4 h-0.5
                  ${index % 2 === 0 ? "-right-4" : "-left-4"}
                  bg-gradient-to-r ${index % 2 === 0 ? "from-blue-500 to-purple-500" : "from-purple-500 to-blue-500"}
                `}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
