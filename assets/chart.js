var energy = `For an actor to have any effect on the audience the
first prerequisite is that this actor be alive. This is a simple
fact, a dead actor has absolutely no effect. If one were to compare
a living body to a dead body one would become immediately aware of
one thing. The living body is animated. Implicit in movement is a
kind of life. Within the living body there appears to be a vital force
which is clearly absent from the dead body.`;

var imagination = `Imagination, a divine and active gift is the
breathing place in Michael Chekhov's approach to acting, it is
always addressed, and daily developed. “What is now proved was only
once imagined.” ~William Blake`;

var form = `The body as a form brings form to impulses. Only through
form can we or the audience understand anything. The form is first
imagined and then the form is moved.`;

var concentration = `Concentration is the key activity in realizing
anything of value. Concentration is the ability to send ourselves
to whatever we choose in order to become one with it, and to know in
an inner sense, what it means to be identified with the gesture or
the image that has our concentration.`;

var outer = `This basic operating principle, The inner event is
translated to the outer expression is the key to understanding the
technique of Michael Chekhov. The training is always pointing to this
ability of making an identification with an image, and it continually
confirms that movement is essential to living things. What is alive is
never fixed in space, feelings, will, and thoughts are human functions
that are in motion. Movement in space is subject to laws and principals,
and all of Chekhov’s exercises concern themselves with moving the body
in space in order to absorb psychological content from the movement itself.`;

var gesture = `Michael Chekhov’s most conspicuous contribution to the
actor is what he has named, the Psychological Gesture. This is a very
specific movement that is first imagined then executed as a means to
excite the actor to play. It is in many ways a question posed by the
actor, a question concerning the How of expression. Receiving the
answer is really the difficulty of this work and this brings us back
to the body which must become sensitized to the movements it can make.`;

var sensation = `We have all touched fire before and we have been burned
by it, so we do not have to think about how to behave when handling it.
Every experience we have ever had has been witnessed and felt by the body.
The body has reacted to it and the body has also recorded it. If we seek
the experience as a sensation which is something felt by the body, as
opposed to a memory of a specific event, then we begin to discover that
these sensations are tied together, all of our sorrows and joys having
been forgotten by our conscious selves but never forgotten by the body
are alive as sensation.`;

var innerMovement = `I can practice a movement so that I am very familiar
with it, then I can stop the movement all together and begin to imagine
that I am simply moving my arm up and down. This particular imagination
is not merely a visualization, it is a movement imagination, I intend
to have the experience of this particular movement without moving my
muscles. This inner movement is as much an event as the actual movement.
It is an inner event, and it belongs to the actor as a means to excite
impulses to move from.`;

var giving = `We have to grow larger to sense ourselves as increased
beings. We need a reliable way to tap into a force that is larger
than ourselves. If the work of the actor is to give all at every
moment, then there must be something to give, there has to be an
inexhaustible supply of energy. Something about Chekhov acting is,
for the lack of a better word, lifted. Inspiration is its aim, where
something poetic and beautiful is breathing out of the actor. This
breathing out will not come about in the presence of dictionaries or
lists, but is reliant on our ability to incorporate images, experience
movement, and act on impulses.`;

var receiving = `The actor’s primary work in performance is to receive.
After reception comes response. In acting it is called reaction. Actors
concern themselves with action as they should, but action is born out of
reaction. It is likely to be a genuine action strong and correct if we
let it come out of the proper reaction. I think we have to know what is
the proper reaction first then we can rehearse. Life looked at as reaction
is simple and direct. Reaction lives in the ream of feelings, action in the will.`;

var impulses = `Our primitive needs and wishes do not disappear from us,
they stay within the body and we are in a direct and often unconscious
contact with them. They reveal themselves in many ways, but especially
in impulses. When we see a performer move directly from an impulse we
believe it. We feel it is authentic.  Movements without impulse are suspicious.`;

var DEFINITIONS = {
  'ENERGY': energy,
  'IMAGINATION': imagination,
  'FORM': form,
  'CONCENTRATION': concentration,
  'OUTER': outer,
  'GESTURE': gesture,
  'SENSATION': sensation,
  'INNER MOVEMENT': innerMovement,
  'GIVING': giving,
  'RECEIVING': receiving,
  'IMPULSES': impulses
};

document.addEventListener('DOMContentLoaded', function() {
  var resetHighlight = function() {
    terms.forEach(function(t) {
      t.style.color = "#28343F";
    });
  };

  var descriptionBox = document.getElementsByClassName('chart-definition')[0];
  var terms = Array.from(document.getElementsByClassName('chart-term'));
  terms.forEach(function(t) {
    t.addEventListener('click', function(e) {
      resetHighlight();
      var term = e.target.innerText;
      var selectedTerm = e.target;
      selectedTerm.style.color = "#bb1f26";
      descriptionBox.innerHTML = DEFINITIONS[term];
    });
  });
  descriptionBox.innerHTML = DEFINITIONS['ENERGY'];
  terms[0].style.color = "#bb1f26";
});
