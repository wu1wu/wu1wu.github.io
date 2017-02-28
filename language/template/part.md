# part

{{ 'part' | tag }} defines a parameterized component that can be
reused in multiple places in the design of a 3D model, and each instance
can have a different parameter setting.

Using {{ 'part' | tag }} in the code is highly encouraged because it greatly improves
the reusability, readability, and maintainability of your code.

Suppose we've designed a simple frame by cutting a cube out of a larger cube like
below.

{% craftml %}
<g l="center" t="size z 2; cut #inside">
  <cube id="outside"/>
  <cube t="size xy 8" id="inside"/>
</g>
{% endcraftml %}

We can wrap these tags with a {{ 'part' | tag}} tag and give it a meaningful
name by adding `name="frame"` as an attribute. This allows us to create
multiple instances of the frame later by writing `<frame/>`. In the example
below, we create two frames and insert a cube between them.

{% craftml %}
<part name="frame">
  <g l="center" t="size z 2; cut #inside">
    <cube id="outside"/>
    <cube t="size xy 8" id="inside"/>
  </g>
</part>

<row>
  <frame/>
  <cube/>
  <frame/>
</row>
{% endcraftml %}

Suppose we want to update the design of the frame part. Instead of a square
hole, we want the hole to be a circle. We can simply modify the code inside
the `<part name="frame">` tag, changing the second `<cube>` to `<cylinder>`.
Then, both instances of the frame part are updated with the new design.

{% craftml %}
<part name="frame">
  <g l="center" t="size z 2; cut #inside">
    <cube id="outside"/>
    <cylinder t="size xy 8" id="inside"/>
  </g>
</part>

<row>
  <frame/>
  <cube/>
  <frame/>
</row>
{% endcraftml %}

Furthermore, suppose we want to control the size of the hole of each frame.
We can introduce a parameter by adding a {{ 'param' | tag}} tag and
giving it `diameter` as the name. Then, we can assign each instance of
the `<frame>` with a different diameter value to achieve what we want.

{% craftml %}
<part name="frame">
  <param name="diameter" type="number" value="10"/>
  <g l="center" t="size z 2; cut #inside">
    <cube id="outside"/>
    <cylinder t="size xy {:diameter:}" id="inside"/>
  </g>
</part>

<row>
  <frame diameter="5"/>
  <cube/>
  <frame diameter="8"/>
</row>
{% endcraftml %}
