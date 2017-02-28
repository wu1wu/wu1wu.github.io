# translate

{{'translate' | t}} a solid along certain axes by specified amounts.

{% craftml %}
<cube/>
<!-- translate this prism by 40 in x -->
<prism t="translate 40 0 0"/>

<!-- translate this sphere by -20 in x -->
<sphere t="translate -20 0 0"/>

<!-- translate this cylinder by 20 in y -->
<cylinder t="translate 0 20 0"/>

<!-- translate this dome by -40 in y -->
<dome t="translate 0 -40 0"/>
{% endcraftml %}


This example does exactly the same thing as above by specifying the
axes explicitly.
{% craftml %}
<cube/>
<!-- translate this prism by 40 in x -->
<prism t="translate x 40"/>

<!-- translate this sphere by -20 in x -->
<sphere t="translate x -20"/>

<!-- translate this cylinder by 20 in y -->
<cylinder t="translate y 20"/>

<!-- translate this dome by -40 in y -->
<dome t="translate y -40"/>
{% endcraftml %}
