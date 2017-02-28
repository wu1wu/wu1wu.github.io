# template

CraftML provides a powerful template system designed to make it easy to parameterize,
reuse, and customize 3D models.

The key components of CraftML's template system are:
* {{ 'part' | tag }} defines a reusable object,
* {{ 'param' | tag }} defines a parameter,
* {{ 'content' | tag }} defines a placeholder for inserting content, and
* {{ 'repeat' | attr}} repeats an object multiple times, where each object
can be either a clone or a customized version.

The live example below demonstrates the use of these components.

{% craftml %}
<part name="plate">
  <param name="plateRadius" type="number" value="15"/>
  <stack>
    <!-- when this part is used, the content (i.e., children)
         of the 'using tag' will be inserted here -->
    <content/>
    <!-- create a cylinder whose radius is controlled by 'headRadius' -->
    <cylinder radius="{:plateRadius:}"/>
  </stack>
</part>

<!-- create a plate holding a cube -->
<plate plateRadius="20">
  <!-- customized content to insert -->
  <row>
    <cube/><sphere/><cube/>
  </row>
</plate>
{% endcraftml %}
