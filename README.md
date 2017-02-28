# CraftML

_What is CraftML?_

CraftML is a markup language for developing 3D printable models using familiar web
technologies including __HTML__, __CSS__, __SVG__, __Javascript__, __JQuery__, and __templates__.

Below is a simple _Hello Cube_ program written in CraftML to generate a 3D word
"Hello" followed by a 3D cube.

{% craftml %}
<div>
  Hello <cube></cube>
</div>
{% endcraftml %}

Try adding a word `World` after the word `Hello`. Press `shift`+`return` and you
will see the effect of this change. The 3D text should now read ''Hello World''.

Next, try replacing `<cube></cube>` with `<sphere></sphere>`. Press `shift`+`return`
and you will see that the 3D cube is now replaced by a 3D sphere.

## Next

Check out the [tutorials](tutorials/) to learn more about CraftML.
