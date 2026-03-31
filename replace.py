import re

with open('index.html', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = [
    (r'https://lh3\.googleusercontent\.com/aida-public/[^"]+', 'assets/hero_bg.png'),
    (r'https://lh3\.googleusercontent\.com/aida-public/[^"]+', 'assets/trainer_1.png'),
    (r'https://lh3\.googleusercontent\.com/aida-public/[^"]+', 'assets/trainer_2.png'),
    (r'https://lh3\.googleusercontent\.com/aida-public/[^"]+', 'assets/trainer_3.png'),
    (r'https://lh3\.googleusercontent\.com/aida-public/[^"]+', 'assets/trainer_4.png'),
    (r'https://lh3\.googleusercontent\.com/aida-public/[^"]+', 'assets/member_1.png'),
]

# The matches are in order in the file, so a simple sequential replace using count=1 will work perfectly!
for pattern, repl in replacements:
    content = re.sub(pattern, repl, content, count=1)

# Replace style block
style_pattern = r'<style>.*?</style>'
link_style = '<link rel="stylesheet" href="style.css" />\n    <script src="app.js" defer></script>'
content = re.sub(style_pattern, link_style, content, flags=re.DOTALL)

with open('index.html', 'w', encoding='utf-8') as f:
    f.write(content)

print('success')
