import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// The display data, just kept it as variables for quick implementation
// --------------------------------------------------------------------
// ------------------------ Page Information --------------------------
// --------------------------------------------------------------------
let LOCK_AND_KEY_1 = 
`A key is a small piece of metal consisting of two parts:`;
let LOCK_AND_KEY_2 = 
`Bit/Blade - slides into the key way of the lock
and distinguishes between different keys`;
let LOCK_AND_KEY_3 = 
`Bow - left protruding so that torque can be applied by the user`;
let LOCK_AND_KEY_4 = 
`A key operates one lock or set of locks that are keyed alike,
a lock/key system where each similar keyed lock requires the
same, unique key.`;
let LOCK_AND_KEY_5 =
`When the correct key is inserted, the gaps between the key
pins and driver pins align with the edge of the plug (shear line).`

let LOCK_1 = 
`A lock consists of a shackle, locking bar, a body and 
a locking mechanism`
let LOCK_2 = 
`Locks have two sets of pins (key and driver)`
let LOCK_3 = 
`When a key is inserted, the key forces the key pins to push the driver
pins in the lock chamber to different heights. After the pins align in
the lock cylinder, the key can be rotated to unlock the lock.`

// --------------------------------------------------------------------
// ----------------------- Physical Security --------------------------
// --------------------------------------------------------------------
// KEYED PADLOCK
let DESC_KEYED = 
`A padlock is a portable lock that utilises a
shackle to secure an object.
A keyed padlock requires a key to disengage 
the locking mechanism.
A padlock can either be a key-retaining lock
which prevents the key to be removed while the lock is open, 
or it can also be non key retaining which allows 
the removal of the key if the lock is open.`;
let INST_KEYED = 
`Padlocks can be broken by force through the use of bolt cutters, 
hammers, drills, lock-picking and shimming. In particular lock picking 
can be more explored through the different lock and key sections of
this application.`;

// COMBINATION PADLOCK
let DESC_COMBINATION = 
`A padlock is portable lock that utilises a
shackle to secure an object.
A combination padlock utilizes a series of numbers
and a dial to open the lock if the sequence matches
the sequence of numbers intended.`;              
let INST_COMBINATION = 
`Padlocks can be broken by force through the use of bolt cutters, 
hammers, drills, lock-picking and shimming. In this case, the 
combination padlock is also vulnerable to combination cracking.`;

// KNOBLOCK PADLOCK
let DESC_KNOBLOCK = 
`Common lock for both internal and external locks.
The locks have a key clinder on one side and a rotatable knob
on the other which controls the locking mechanism.
For external doors, they should be accompanied with another lock
such as a deadbolt as they can be compromised by brute force.`;
let INST_KNOBLOCK = 
`The lock cylinder is in the knob itself and not the door and
so the lock can be broken via brute force. For example you can 
use a hammer to knock off the knob and pilers to disengage the 
locking mechanism.
This type of lock is also prone to lock picking and shimming`;

// SINGLE CYLINDER DEADBOLT
let DESC_DEADBOLT_S = 
`Deadbolts are found on external doors. Deadbolts utilize 
a rotating cylinder that drives a bolt into the door frame that
can't be retracted until the locking cylinder is rotated.
A single cylinder deadbolt is common in homes where there is a key 
cylinder on the outside and a thumbturn (rosary) on the inside
to open or close the lock.`;
let INST_DEADBOLT_S = 
`The lock is more resiliant to brute force attacks and
impervious to shimming but can fall victim to lock picking.
You can increase the safety of a deadbolt by installing a
flip guard, a latch that flips over the turn knob of the 
deadbolt that restricts it from rotating. As a result, becomes
immune to lock picks, bump keys & even a key from outside`;

// DOUBLE CYLINDER DEADBOLT
let DESC_DEADBOLT_D = 
`Deadbolts are found on external doors. Deadbolts utilize 
a rotating cylinder that drives a bolt into the door frame that
can't be retracted until the locking cylinder is rotated.
A double cylinder deadbolt uses a key cylinder on both sides 
of the lock. These locks are a potential fire hazard as you 
need the key to unlock the door from the inside.`;
let INST_DEADBOLT_D = 
`A double cylinder is more secure and offers a high level of security
from attacks than a single cylinder. Somce Double 
cylinder deadbolts require keys to open from the 
inside/outside and so an attacker can't break through 
a window and open it from the inside which is 
possible for a single cylinder.
However, it does not prevent lockpicking or an intruder "bumping" a 
lock and only offers security from breaking and unlocking from the inside.`;

// THUMB DEADBOLT
let DESC_DEADBOLT_T = 
`Deadbolts are found on external doors. Deadbolts utilize 
a rotating cylinder that drives a bolt into the door frame that
can't be retracted until the locking cylinder is rotated.
A lockable thumb turn deadbolt is a hybrid of a single cylinder 
and double cylinder deadbolts. It has a key cylinder on one side
and thumb turn on the other. The thumb turn has a lockable key
cylinder on it allowing you to lock the thumb turn.
It features a thumbturn on the inside similar to a single cylinder
just the thumbturn can be locked using a key so it can't lock or
unlock the door.
This means, in residential situation, the thumbturn can be left 
in an unlocked position while people are inside the house, and 
it will operate exactly like a single cylinder deadbolt.`;
let INST_DEADBOLT_T = 
`It is similar to the other two in properties, it is good for
physical defense however still struggles against lock picking.`;

// LEVER LOCKS
let DESC_LEVER = 
`Found in inner doors of commerical buildings. Is a lever that
swings up or down to release the bolt (Just like knob locks they have
a key cylinder on one side and a rotatable turn knob on the other).
Frequently used when handicap accessibility is important. 
Lever handle locks are ADA accessible and can be changed 
between left and right handedness.`;
let INST_LEVER = 
`These types of locks can be compromised through the use
of lock picking & brute force-torque attacks, such as abruptly 
applying all of your weight on the lever. However, some lever 
hand locks do employ “clutch” levers that won’t place pressure 
on the locking mechanism if force is applied to the lever while 
locked. Vulnerable to “torque attacks”.`;

// CAM LOCK
let DESC_CAM = 
`Style of latch that are commonly used in filing cabinets, lockboxes, 
other low-level security appliances. These locks utilise a small flat 
metal tailpiece called a “cam” that uses a key to rotate the cam into 
and out of a slot in the door.
They can rotate either clockwise or counter-clockwise and there is 
a variety of cams that can be used. Cam locks typically employ 
either a pin tumbler or tubular locking mechanism, both of which 
are exceedingly simple to pick.`;
let INST_CAM = 
`The cam locks with a simple turn, unlocking only requires reversing 
the action (reverse the turn). You can have a simple screw driver to force
the cam lock to rotate, they are also vulnerable to lock picking.`;

// MORTISE LOCK
let DESC_MORTISE = 
`Utilises two different lock types compiled into one device. It 
includes a non-locking sprung latch that is controlled by a level 
handle. Additionally, it has a deadbolt that is used as secondary 
security.`;
let INST_MORTISE = 
`Act as both doorknob & deadbolt. They are susceptible to lock 
picking but put up a greater defense to forced entry.`;

// --------------------------------------------------------------------
// ------------------------ Different Locks ---------------------------
// --------------------------------------------------------------------
let PIN_DESC = 
`Without a key in the lock, the driver pins (blue) are pushed down,
preventing the plug (yellow) from rotating. 
The key has a set of grooves on the key's blade that limits the
type of lock the key can slide into.
An additional pin called the master pin is between the key
and driver pins, accepting master keys allowing the plug to 
rotate at multiple pin elevations.
As the key slides into the lock, the horizontal grooves on 
the blade align with the wards in the keyway allowing/denying
entry to the cylinder.
A series of pointed teeth and notches on the blade (bittings)
allow pins to move up and down until they align with the shear
line of the inner & outer cylinder, allowing the cylinder or 
cam to rotate freely and the lock to open.`;
let PIN_UNLOCK = 
`A basic pin tumbler lock is vulnerable to lock snapping where
you apply a strong torque force onto the lock cylinder and thus
breaking the lock; it is also vulnerable to lock picking including
lock bumping and snap guns. To improve security, you can apply security
pins which is used to prevent a snap gun or bump key attack. You can
also lock pick using tension wrenches, half diamond picks, hook picks,
ball picks, rake picks and decoder picks. The two main techniques are
raking and single pin picking.`;

let WAFER_DESC = 
`A series of flat wafers holds a cylindrical plug in place.
Without a key in the lock, the wafers (red) are pushed down
by springs. The wafers nestle into a groove in the lower part
of the outer cylinder (green) preventing the plug (yellow) from
rotating. When the correct key is inserted into the lock, the
wafers are raised from the lower groove. When the wafers are in this
state, the key and plug can be rotated and unlock the lock.`;
let WAFER_UNLOCK = 
`Can be opened with a set of jigglers and try-out keys. 
These keys are designed with common key patterns. The key is 
inserted into the lock like a normal key, and a turning force 
is applied whilst the key is raked back and forth until the lock 
opens. Wafer locks are also vulnerable to pin tumbler lock lockpicking
methods as well as vulnerable to skeleton keys.`

let TUBULAR_DESC = 
`Is an alternate pin tumbler lock where the pins are arranged
in a circular pattern and the key is tubular in shape. 
The key pins (red) and driver pins (blue) are pushed towards
the front of the lock preventing the plug (yellow) from rotating.
The tubular key has several half-cylinder indentations which 
align with the pins. The design of the key fits into the
rectangular access in the lock causing the key to align if possible. 
Then the key is inserted, the gaps between the key and driver pins align
with the shear line. If the pins are aligned, the lock and plug can be
rotated. Typically used in bike lokes, elevators and coin based vending machines.`;
let TUBULAR_UNLOCK = 
`The tubular locks are vulnerable to lock picking, in particular a
tubular lock pick and drilling (hole-saw drill bit).`;

let WARDED_DESC =
`Has a set of obstructions (wards), to prevent the lock from
opening unless the right key is inserted. The key has notches 
corresponding to the obstructions in the lock, allowing it to
rotate freely inside the lock. Firstly, the key enters the lock
through the keyhole, if the tip of the key aligns and matches with
the cylindrical design inside the lock enables the key and overall
can then activate a lever/sliding bolt to unlock the lock.`
let WARDED_UNLOCK = 
`Since the design is not the most secure, it can easily be lock picked
using any lockpicking tools from a pin tumbler lock, more imporatntly it
is susceptible to lock picking with a skeleton key as it can freely
bypass the wards. Since they are relatively easy to break, they should
only be used to secure low security applications.`;

let DISC_DESC = 
`Composed of slotted rotating detainer discs. A specifically cut key 
can rotate these discs to align the slots and so the notches in the
perimeters line up. This mechanism doesn't use
springs like the other locks described in this section. Since there
are no springs, they are appropriate for outdoor locks.`;
let DISC_UNLOCK = 
`This type of lock is more secure and harder to lock pick than the
standard pin tumbler locks. This type of lock cannot be lock bumped
and diffiuclt (not impossible) to lock pick but requires specific tools.
The locking mechanism may be drilled and destroy the sidebar, however
some disc locks utilise anti-drilling plates to prevent this attack.`;

let LEVEL_DESC = 
`Uses a set of levers to prevent the bolt from moving in the lock.
Lifting the tumbler above a certain height will allow the locking bolt 
to slide past. An increase in levers i.e. three-lever and fiver-lever locks
will improve the security and difficulty requires to crack the lock.
A lever has pockets through which the bolt stump moves during unlocking.
Three-lever locks is common and used for low security applications like
internal doors, mean while the five-lever locks is used for home security.`
let LEVEL_UNLOCK = 
`These types of locks are vulnerable to lock picking, in particular a 
curatin pick where once inserted into the keyway there is a force applied
to the locking bolt. The pick can then lift the lever inside the lock.
More secure lever locks have notches cut into the levers to catch the locking
bolt & prevents moving.`;

let MAGNETIC_DESC =
`Locking mechanism whereby the key utilizes magnets as part of the
locking and unlocking mechanism. A magnetic key would use
from one or more small magnets oriented so the North/South poles
equate to a combination to push or pull the lock's internal
tumblers, releasing the lock.
If a matching key is inserted, all the mechanical pins are
pushed into correct positions and the magnetic pins are pushed
to the appropriate level by the magnetic force inside the key.`;
let MAGNETIC_UNLOCK = 
`Traditional lock picking is not possible for this type of lock since 
the tumblers are magnetically operated. The corresponding magnetic keys 
cant be reproduced by locksmiths. Overall this lock prevents lock picking,
and prevents lock bumping as there is no physical contact points between
key and magnetic pins for the bumping to occur.`;

// --------------------------------------------------------------------
// ------------------------- Different Keys ---------------------------
// --------------------------------------------------------------------

let SKELETON_DESC = 
`Used for opening warded locks. It is made to conform to a 
generalized key shape relatively simpler than the actual key.
The simpler shape allows for internal manipulations. Keys for 
warded locks only require the backend manipulating which is 
the end which opens the lock. A series of grooves on either 
side of the key’s blade limit the type of lock the key can 
slide into. As the key slides into the lock through the keyway, 
the wards align with the grooves in the key’s profile to allow 
or deny entry into the lock cylinder.`;

let CURTAIN_DESC =
`Used to open a lever tumbler lock. This pick is inserted into the keyway 
of a lock, force is then applied to the locking bolt. The pick then can be 
used to lift a lever inside the lock to the threshold height (required height 
a lever requires to lift so that the locking bolt can pass).`;

let TENSION_W_DESC = 
`Used to crack pin tumbler and wafer locks. Also known as a torsion wrench,
It applies torque to the plug of a lock to hold any picked pins 
in place. Once all pins are picked, the tension wrench is then 
used to turn the plug and open the lock.
Bottom of the keyway: wrenches are typically “L” shape
although the vertical part of the letter is elongated in comparison 
to the horizontal part.
During most key locking processes this tool is used as you need tension 
applied to the lock to help unlock it.`; 

let HALF_DIAMOND_DESC =
`Use to pick indiviudal pins, raking, wafer and disk locks.
The triangular shaped half-diamond is 2.5-12 millimetres long.
The angles form the base of the half diamond can be either steep
or shallow, depending on the need for picking without affecting
neighbouring pins, or raking as appropriate.
The slope enables it to move past the pins & get underneath pins 
resting lower in the keyway, it also can push the pins by pressing 
forward and tension on the pick.`;

let HOOK_DESC = 
`Has a hook-shaped tip and is similar to half diamond however
is not used for raking. This is the most generic and common
tool used for lock picking.
A hook may be placed in a keyhole upside down, it can also bitch pick
which is where you randomly pick the lock without knowing the pins 
interacting with or how they are being set. 
Mainly it is used for single pin picking (SSP) where you set each 
single pin individually by moving the hook pick correctly.`;

let BALL_DESC =
`Has a half/full circle shape at tip. Used to open single sided wafer locks
or warded locks.
A ball pick also may be a double ball, with a shape of a snowman with
the circle on top being smaller than the base circle. This type is intended
for bi-direction wafer locks.`;

let RAKE_DESC = 
`Used on pin tumbler and cheaper (weaker) locks. It works by rapidly
sliding the pick past all the pins repeatedly, to bounce the pins
until they reach the shear line.
Generally it has a wavy shape with the intended purpose of manipulating 
back and forth across the pins in a lock to create a gap at the sheerline 
of the lock.`

let DECODER_DESC = 
`Used on pin tumbler locks, it is a key which can be adapted 
so the height of its notches can be changed (screwing them into 
the blade base or adjusting from the handle while the key is in 
the lock); this will allow aces to the lock and also a template 
for cutting a replacement key.`;

let BUMP_DESC = 
`Simplest way to open the majority of pin locks is to insert a key 
that have been cut so that each peak of the key is equal and has 
been cut down to the lowest groove of the key. 
The key is struck sharply with a hammer whilst applying torque. 
The force of the blow is carried down the length of the key and 
moves the driver pins leaving the key pins in place. 
If done correctly this briefly creates a gap around the shear line 
allowing the plug to rotate freely. However some locks and higher
level security applications utilise bumping protection methods.`;

let JIGGLERS_DESC = 
`The jiggling keys are cut in various patterns replicating the 
average lock settings, meaning the jiggling causes the pins or 
wafers to be set until the lock opens.
So they are a set of random picks with different sides emulating bittings for keys.
Usually is a large set and either it will break common locks as they are 
manufactured to match the common pinnings or pin tumblers of the locks available today,
it can also potentially wear down the lock to eventually trick the 
tumbler to think the right key has been inserted.`;

let SNAP_GUNS_DESC =
`Is a tool to open a mechanical pin tumbler lock without using a key. 
A steel rod is inserted into the locks opening and the snap gun  
fires the rod against all of the lock pins simultaneously, 
momentarily freeing the cylinder.
Typically has a trigger that creates movement (like bump keys) which
transfers sudden energy to the key pins which communicate this to the
driver pins causing those pins only to jump, allowing the cylinder to
turn freely for a brief moment, until the pin springs return the 
pins to their locking position.`;

let TUBULAR_LP_DESC =
`Used for opening tubular pin tumbler locks, the picks are similar in
design and come in sizes to fit all major tubular locks. The tool is
simply inserted into the lock and turned clockwise with medium torque.
As the tool is pushed into the lock, each of the pins is slowly forced
down until they stop, binding the driver pins behind the shear line
of the lock. When the final pick is pushed down, the shear plane is clear
and the lock opens.`;

let SHIM_DESC = 
`A thin piece of metal, slide into the shackle and pull it from 
side to side. It is inserted at the top of the lock, not through
the keyhole and then rotating the shim which depresses the latch. 
These shims are thin enough to slip into most padlocks.`;

let KEY_IMPRESSION_DESC = 
`Start with a blank key and fashion the key into the shape of the lock.
So impressioning creates a working key for the target lock, it has two variants.
Firstly copying, which is making a mold of a working key and secondly manipulation, 
which focuses on using a blank key to manipulate lock components to 
determine their proper positions.`;

let BOBBY_PIN_DESC =
`You use two bobby pins, start by inserting the closed "looped" side
of one pin into the bottom portion of the lock. The you use the
second pin at the top of the lock and move in a constant
moving motion, the motion sets the pins in the right position
to eventully unlock the lock.`;



class Locks extends React.Component {

  constructor(props) {
    super();
    this.state = {
      lock_type: 'keyed',
      lock_text: DESC_KEYED,
      lock_name: 'Keyed Padlock',
      lock_text_type: 'description',
      lock_image: 'https://i.ibb.co/nnWyhyd/keyed-padlock.png',

      lock_and_key: 'pin',
      lock_and_key_name: 'Pin Tumbler Lock',
      lock_and_key_text: PIN_DESC,
      lock_and_key_image: 'https://i.ibb.co/xmYPxMC/pin-tumbler.png',

      key: 'skeleton',
      key_name: 'Skeleton Key',
      key_text: SKELETON_DESC,
      key_image: 'https://i.ibb.co/HzPMTvN/skeleton.png'
    }
  }



  update_info = (lock_type) => {
    if (this.state.lock_text_type === 'description') {
      document.getElementById("desc_btn").style.backgroundColor = 'rgb(220,220,220)';
      document.getElementById("inst_btn").style.backgroundColor = 'rgb(250,250,250)';
    }
    else {
      document.getElementById("inst_btn").style.backgroundColor = 'rgb(220,220,220)';
      document.getElementById("desc_btn").style.backgroundColor = 'rgb(250,250,250)';
    }
    var info = '';
    switch(lock_type) {
      case 'keyed':
        (this.state.lock_text_type === 'description') ?  info = DESC_KEYED : info = INST_KEYED;
        this.setState({lock_name: 'Keyed Padlock'});
        this.setState({lock_image: 'https://i.ibb.co/nnWyhyd/keyed-padlock.png'});
        break;
      case 'combination':
        (this.state.lock_text_type === 'description') ?  info = DESC_COMBINATION : info = INST_COMBINATION;
        this.setState({lock_name: 'Combination Padlock'});
        this.setState({lock_image: 'https://i.ibb.co/Mhyn8Dq/combination-padlock.png'});
        break;
      case 'knob_lock':
        (this.state.lock_text_type === 'description') ?  info = DESC_KNOBLOCK : info = INST_KNOBLOCK;
        this.setState({lock_name: 'Knob Lock'});
        this.setState({lock_image: 'https://i.ibb.co/L8tgSt4/knob-lock.png'});
        break;
      case 'deadbolt_single':
        (this.state.lock_text_type === 'description') ?  info = DESC_DEADBOLT_S : info = INST_DEADBOLT_S;
        this.setState({lock_name: 'Single Cylinder Deadbolt'});
        this.setState({lock_image: 'https://i.ibb.co/qBrB5qS/deadbolt-single.png'});
        break;
      case 'deadbolt_double':
        (this.state.lock_text_type === 'description') ?  info = DESC_DEADBOLT_D : info = INST_DEADBOLT_D;
        this.setState({lock_name: 'Double Cylinder Deadbolt'});
        this.setState({lock_image: 'https://i.ibb.co/JxHGFdS/deadbolt-double.png'});
        break;
      case 'deadbolt_thumb':
        (this.state.lock_text_type === 'description') ?  info = DESC_DEADBOLT_T : info = INST_DEADBOLT_T;
        this.setState({lock_name: 'Loackable Thumb Turn Deadbolt'});
        this.setState({lock_image: 'https://i.ibb.co/zNHh8sT/deadbolt-thumb.png'});
        break;
      case 'lever_handle':
        (this.state.lock_text_type === 'description') ?  info = DESC_LEVER : info = INST_LEVER;
        this.setState({lock_name: 'Lever Handle Lock'});
        this.setState({lock_image: 'https://i.ibb.co/jgfpbK2/lever-handle.png'});
        break;
      case 'cam_lock':
        (this.state.lock_text_type === 'description') ?  info = DESC_CAM : info = INST_CAM;
        this.setState({lock_name: 'Cam Lock'});
        this.setState({lock_image: 'https://i.ibb.co/BNG4ZGK/cam-lock.png'});
        break;
      case 'mortise_lock':
        (this.state.lock_text_type === 'description') ?  info = DESC_MORTISE : info = INST_MORTISE;
        this.setState({lock_name: 'Mortise Lock'});
        this.setState({lock_image: 'https://i.ibb.co/0M4K92M/mortise-lock.png'});
        break;
      default:
        console.log("invalid key type");
    }
    this.setState({lock_text: info});
  }

  // Chaning the state of the physical defense page
  change_lock = (event) => {
    this.setState({ lock_type: event.target.value});
    this.update_info(event.target.value);
  }
  change_desc_type = (desc_type) => {
    this.setState({lock_text_type: desc_type});
    this.update_info(this.state.lock_type);
  } 

  // If on the page with different lock types and want to update the state
  change_lock_and_key = (event) => {
    this.setState({lock_and_key: event.target.value});
    this.update_info_2(event.target.value);
  }
  change_desc_type_2 = (desc_type) => {
    this.setState({lock_text_type: desc_type});
    this.update_info_2(this.state.lock_and_key);
  } 

  // If on the key page and a change of state happens
  change_key = (event) => {
    this.setState({key: event.target.value});
    this.update_info_3(event.target.value);
  }

  update_info_2 = (lk_type) => {
    if (this.state.lock_text_type === 'description') {
      document.getElementById("lock_d_btn").style.backgroundColor = 'rgb(220,220,220)';
      document.getElementById("lock_i_btn").style.backgroundColor = 'rgb(250,250,250)';
    }
    else {
      document.getElementById("lock_i_btn").style.backgroundColor = 'rgb(220,220,220)';
      document.getElementById("lock_d_btn").style.backgroundColor = 'rgb(250,250,250)';
    }
    var info = '';
    switch(lk_type) {
      case 'pin':
        (this.state.lock_text_type === 'description') ?  info = PIN_DESC : info = PIN_UNLOCK;
        this.setState({lock_and_key_name: 'Pin Tumbler Lock'});
        this.setState({lock_and_key_image: 'https://i.ibb.co/xmYPxMC/pin-tumbler.png'});
        break;
      case 'wafer':
        (this.state.lock_text_type === 'description') ?  info = WAFER_DESC : info = WAFER_UNLOCK;
        this.setState({lock_and_key_name: 'Wafer Tumbler Lock'});
        this.setState({lock_and_key_image: 'https://i.ibb.co/zh6h2VY/wafer.png'});
        break;
      case 'tubular':
        (this.state.lock_text_type === 'description') ?  info = TUBULAR_DESC : info = TUBULAR_UNLOCK;
        this.setState({lock_and_key_name: 'Tubular Lock'});
        this.setState({lock_and_key_image: 'https://i.ibb.co/Hq66Xbw/tubular.png'});
        break;
      case 'warded':
        (this.state.lock_text_type === 'description') ?  info = WARDED_DESC : info = WARDED_UNLOCK;
        this.setState({lock_and_key_name: 'Warded Lock'});
        this.setState({lock_and_key_image: 'https://i.ibb.co/jfnCgYz/warded.png'});
        break;
      case 'disc':
        (this.state.lock_text_type === 'description') ?  info = DISC_DESC : info = DISC_UNLOCK;
        this.setState({lock_and_key_name: 'Disc Tumbler Lock (Abloy Lock)'});
        this.setState({lock_and_key_image: 'https://i.ibb.co/KXY6Csp/disc.png'});
        break;
      case 'level':
        (this.state.lock_text_type === 'description') ?  info = LEVEL_DESC : info = LEVEL_UNLOCK;
        this.setState({lock_and_key_name: 'Lever Tumbler Lock'});
        this.setState({lock_and_key_image: 'https://i.ibb.co/yktB20k/lever.png'});
        break;
      case 'magnetic':
        (this.state.lock_text_type === 'description') ?  info = MAGNETIC_DESC : info = MAGNETIC_UNLOCK;
        this.setState({lock_and_key_name: 'Magnetic Keyed Lock'});
        this.setState({lock_and_key_image: 'https://i.ibb.co/FW1tJbQ/magnetic.png'});
        break;
      default:
        console.log("invalid lock type");
    }
    this.setState({lock_and_key_text: info});
  }

  update_info_3 = (key_type) => {
    console.log(key_type);
    switch(key_type) {
      case 'skeleton':
        this.setState({key_name: 'Skeleton Key'});
        this.setState({key_text: SKELETON_DESC});
        this.setState({key_image: 'https://i.ibb.co/HzPMTvN/skeleton.png'});
        break;
      case 'curtain':
        this.setState({key_name: 'Curtain Pick'});
        this.setState({key_text: CURTAIN_DESC});
        this.setState({key_image: 'https://i.ibb.co/MCn57G7/curtain.png'});
        break;
      case 'tension':
        this.setState({key_name: 'Tension Wrench'});
        this.setState({key_text: TENSION_W_DESC});
        this.setState({key_image: 'https://i.ibb.co/Fg984bq/torsion.png'});
        break;
      case 'halfdiamond':
        this.setState({key_name: 'Half Diamond Pick'});
        this.setState({key_text: HALF_DIAMOND_DESC});
        this.setState({key_image: 'https://i.ibb.co/7QCgwJ5/halfdiamond.png'});
        break;
      case 'hook':
        this.setState({key_name: 'Hook Pick'});
        this.setState({key_text: HOOK_DESC});
        this.setState({key_image: 'https://i.ibb.co/1nwMRdL/hook.png'});
        break;
      case 'ball':
        this.setState({key_name: 'Ball Pick'});
        this.setState({key_text: BALL_DESC});
        this.setState({key_image: 'https://i.ibb.co/Dz6Jgk5/ball.png'});
        break;
      case 'rake':
        this.setState({key_name: 'Rake Pick'});
        this.setState({key_text: RAKE_DESC});
        this.setState({key_image: 'https://i.ibb.co/ZWNwyTM/rake.png'});
        break;
      case 'decoder':
        this.setState({key_name: 'Decoder Pick'});
        this.setState({key_text: DECODER_DESC});
        this.setState({key_image: 'https://i.ibb.co/dpx5LKL/decoder.png'});
        break;
      case 'bump':
        this.setState({key_name: 'Bump Keys'});
        this.setState({key_text: BUMP_DESC});
        this.setState({key_image: 'https://i.ibb.co/bHqwpRz/bumb.png'});
        break;
      case 'jiggle':
        this.setState({key_name: 'Jigglers/Try Out Keys'});
        this.setState({key_text: JIGGLERS_DESC});
        this.setState({key_image: 'https://i.ibb.co/cxsXptt/jiggle.png'});
        break;
      case 'snapgun':
        this.setState({key_name: 'Snap Guns'});
        this.setState({key_text: SNAP_GUNS_DESC});
        this.setState({key_image: 'https://i.ibb.co/zHCjKxk/snapgun.png'});
        break;
      case 'tubularpick':
        this.setState({key_name: 'Tubular Lock Pick'});
        this.setState({key_text: TUBULAR_LP_DESC});
        this.setState({key_image: 'https://i.ibb.co/Sfk2Wj7/tubpick.png'});
        break;  
      case 'shim':
        this.setState({key_name: 'Shim'});
        this.setState({key_text: SHIM_DESC});
        this.setState({key_image: 'https://i.ibb.co/ydwB1mb/shim.png'});
        break;      
      case 'key_imp':
        this.setState({key_name: 'Key Impressioning'});
        this.setState({key_text: KEY_IMPRESSION_DESC});
        this.setState({key_image: 'https://i.ibb.co/vmGJGNn/impress.png'});
        break;   
      case 'bobby_pin':
        this.setState({key_name: 'Bobby Pin'});
        this.setState({key_text: BOBBY_PIN_DESC});
        this.setState({key_image: 'https://i.ibb.co/28ZxRnL/bobby.png'});
        break;    
      default:
        console.log("invalid key type")
    }
  }

  render() {
    return (
      <div> 
        <div id="different_physical">
          <p className="page_title">Physical Security</p>
          <select id = "different_locks" value={this.state.lock_type} onChange={this.change_lock}> 
            <option value="keyed"> Padlock: Keyed </option>  
            <option value="combination"> Padlock: Combination  </option>  
            <option value="knob_lock"> Knob Lock </option>  
            <option value="deadbolt_single"> Deadbolt: Single Cylinder </option>  
            <option value="deadbolt_double"> Deadbolt: Double Cylinder </option>  
            <option value="deadbolt_thumb"> Deadbolt: Lookable Thumb Turn </option>  
            <option value="lever_handle"> Lever Handle Lock </option>  
            <option value="cam_lock"> Cam Lock </option>  
            <option value="mortise_lock"> Mortise Lock </option>  
          </select>  
          <div id="main_contents">
            <div id="image_box"><img className="image_key_and_lock" src={this.state.lock_image}></img></div>
            <div id="description_box">
              <button id="desc_btn" onClick={() => this.change_desc_type('description')}>Description</button>
              <button id="inst_btn" onClick={() => this.change_desc_type('instructions')}>Steps To Crack</button>
              <div id="description_text">
                <div id="lock_text">{this.state.lock_name}</div>
                <div id="description">{this.state.lock_text}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="different_locks_and_keys">
          <p className="page_title">Different Locks</p>
          <div id="lock_info">
            <div>{LOCK_1}</div>
            <div>{LOCK_2}</div>
            <div>{LOCK_3}</div>
          </div>
          <select id="different_lock_and_keys" value={this.state.lock_and_key} onChange={this.change_lock_and_key}>
            <option value="pin"> Pin Tumbler Lock </option>  
            <option value="wafer"> Wafer Tumbler Lock  </option>
            <option value="tubular"> Tubular Lock </option>
            <option value="warded"> Warded Lock </option>
            <option value="disc"> Disc Tumbler Lock </option>
            <option value="level"> Lever Tumbler Lock </option>
            <option value="magnetic"> Magnetic Keyed </option>
          </select>
          <div id="main_contents_2">
            <div id="image_box"><img className="image_key_and_lock" src={this.state.lock_and_key_image}></img></div>
            <div id="description_box_2">
              <button id="lock_d_btn" onClick={() => this.change_desc_type_2('description')}>Description</button>
              <button id="lock_i_btn" onClick={() => this.change_desc_type_2('instructions')}>Ways to Unlock</button>
              <div id="description_text_2">
                <div id="lock_text">{this.state.lock_and_key_name}</div>
                <div id="description_2">{this.state.lock_and_key_text}</div>
              </div>
            </div>
          </div>
        </div>
        
        <div id="different_keys">
          <p className="page_title">Different Keys</p>

          <div id="key_info">
            <div>{LOCK_AND_KEY_1}</div>
            <ul>
              <li> {LOCK_AND_KEY_2} </li>
              <li> {LOCK_AND_KEY_3} </li>
            </ul>
            <div>{LOCK_AND_KEY_4}</div>
            <div>{LOCK_AND_KEY_5}</div>
          </div>

          <select id="different_key_options" value={this.state.key} onChange={this.change_key}>
            <option value="skeleton"> Skeleton Key </option>  
            <option value="curtain"> Curtain Pick </option>
            <option value="tension"> Tension Wrench </option>
            <option value="halfdiamond"> Half Diamond Pick </option>
            <option value="hook"> Hook Pick </option>
            <option value="ball"> Ball Pick </option>
            <option value="rake"> Rake Pick </option>
            <option value="decoder"> Decoder Pick </option>
            <option value="bump"> Bump Keys </option>
            <option value="jiggle"> Jigglers/Try-Out Keys </option>
            <option value="snapgun"> Pick (snap) Guns </option>
            <option value="tubularpick"> Tubular Lock Pick </option>
            <option value="shim"> Shim </option>
            <option value="key_imp"> Key Impressioning </option>
            <option value="bobby_pin"> Bobby Pin </option>
          </select>

          <div id="main_contents_3">
            <div id="image_box_3"><img className="image_key_and_lock" src={this.state.key_image}></img></div>
            <div id="description_box_3">
              <div id="description_text_3">
                <div id="lock_text">{this.state.key_name}</div>
                <div id="description_3">{this.state.key_text}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
















// The overall page: contains the title, image/video and description
class Lock_Page extends React.Component {
  render() {
    return (
      <div>  
        <Lock_Page_Header />
        <Locks />
      </div>
    );
  }
}

// The top of the page: just the title and maybe some other page change
class Lock_Page_Header extends React.Component {

  change_to_physical_security_screen = () => {
    document.getElementById("different_keys").style.display = 'none';
    document.getElementById("different_locks_and_keys").style.display = 'none';
    document.getElementById("different_physical").style.display = 'block';
  }
  change_to_lock_screen = () => {
    document.getElementById("different_keys").style.display = 'none';
    document.getElementById("different_locks_and_keys").style.display = 'block';
    document.getElementById("different_physical").style.display = 'none';
  }
  change_to_key_screen = () => {
    document.getElementById("different_keys").style.display = 'block';
    document.getElementById("different_locks_and_keys").style.display = 'none';
    document.getElementById("different_physical").style.display = 'none';
  }

  render() {
    return (
      <div id="page_title">
        Lock Picking
        <button className="title_btn" onClick={this.change_to_key_screen}> Different Keys </button>
        <button className="title_btn" onClick={this.change_to_lock_screen}> Different Locks </button>
        <button className="title_btn" onClick={this.change_to_physical_security_screen}> Physical Security </button>
      </div>
    );
  }
}

// ========================================
// Load the Page
ReactDOM.render(
  <Lock_Page />,
  document.getElementById('root')
);



