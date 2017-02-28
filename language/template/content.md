# content

{{ 'content' | tag}} defines a placeholder within a template where customized
content can be inserted into.

Consider the example below, which are 16 cubes in a 4 by 4 grid layout:
{% craftml %}
<part name="grid">
  <col spacing="2">    
    <row repeat="4" spacing="2">
      <g repeat="4">
        <cube/>
      </g>
    </row>    
  </col>
</part>

<grid></grid>
{% endcraftml %}

By replacing {{ 'cube' | tag}} with {{ 'content' | tag }}, we turn this layout
into a reusable template where we can create grid of our own customized object
instead of the cube.

Here, we modify the previous example to produce a grid of pins with a rounded
head, each is modeled as a dome above a cylinder.

{% craftml %}
<part name="grid">
  <col spacing="2">    
    <row repeat="4" spacing="2">
      <g repeat="4">
        <content/>
      </g>
    </row>    
  </col>
</part>

<grid>
  <!-- customized content:
    a rounded pin to be inserted into <content/>
    -->
  <stack>
    <dome/>
    <cylinder t="size z 20"/>
  </stack>
</grid>
{% endcraftml %}

## Named content tags

Content tags can be individually named to take on distinct roles.
```html
<content name="top"/>
```

Let's look at the example below, which is a _sandwich_ model consisting of a top,
a middle, and a bottom layer. In between layers are flat cylinders colored in yellow.
Each layer is defined as a content holder. Then, when `<sandwidth>` is used,
we can individually model what goes into each layer, which is represented by
the children tags `<top>`, `<middle>`, and `<bottom>` respectively. Inside
each child tag, we add a dome, a cube, and a sphere respectively, and color
them in brown.

{% craftml %}
<part name="sandwich">
  <stack>
    <content name="top"/>
    <cylinder t="size z 2" color="yellow"/>
    <content name="middle"/>
    <cylinder t="size z 2" color="yellow"/>
    <content name="bottom">
  </stack>
</part>

<sandwich>
  <top>
    <dome color="brown"/>
  </top>
  <middle>
    <cube color="brown"/>
  </middle>
  <bottom>
    <sphere color="brown"/>
  </bottom>
</sandwich>
{% endcraftml %}
