# color

{{ 'color' | attr }} specifies the color of an element.

{% craftml %}
<style>
  cube {
      color: black;
  }
  cylinder {
      color: gold;
  }
</style>
<row>
  <cube/>
  <cylinder/>
  <cube/>
  <cylinder/>
  <cube/>
</row>
{% endcraftml %}

Color elements selected by class labels

{% craftml %}
<style>
  .odd {
      color: pink;
  }
  .even {
      color: crimson;
  }
</style>
<row>
  <cube class="odd"/>
  <cube class="even"/>
  <cube class="odd"/>
  <cube class="even"/>
  <cube class="odd"/>
</row>
{% endcraftml %}

Color elements selected by Id

{% craftml %}
<style>
  #one {
      color: #55F;
  }
  #two {
      color: #AAF;
  }
  #three {
      color: #FFF;
  }
</style>
<row>
  <cube id="one"/>
  <cube id="two"/>
  <cube id="three"/>
</row>
{% endcraftml %}
