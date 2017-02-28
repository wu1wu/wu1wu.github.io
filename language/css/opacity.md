# opacity

{{ 'opacity' | attr }} specifies the opacity level of an element.

{% craftml %}
<row style="color: blue">
  <sphere/>
  <sphere style="opacity: 0.9;"/>
  <sphere style="opacity: 0.7;"/>
  <sphere style="opacity: 0.5;"/>
  <sphere style="opacity: 0.3;"/>
</row>
<cube size="50 10 2" style="color:red;"/>
{% endcraftml %}
