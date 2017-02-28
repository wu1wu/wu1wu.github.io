# style

{{ 'style' | tag }} attaches a stylesheet to an object.

{% craftml %}
<style>
  sphere { color: yellow; }
</style>
<row spacing="10">
  <style>
    cube {color: red;}
  </style>
  <cube/>
  <sphere/>  
  <style>
    cube {color: green;}
  </style>
  <cube/>
  <sphere/>
</row>
{% endcraftml %}
