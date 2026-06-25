type Props={

open:boolean;

title:string;

onClose:()=>void;

onDelete:()=>void;

};

const DeleteDesignModal=({

open,

title,

onClose,

onDelete

}:Props)=>{

if(!open)return null;

return(

<div
className="
fixed
inset-0
bg-black/70
flex
items-center
justify-center
z-50
"
>

<div
className="
bg-slate-900
rounded-3xl
border
border-slate-800
w-[420px]
p-8
"
>

<h2
className="
text-2xl
font-bold
text-white
"
>

Delete Design

</h2>

<p
className="
mt-4
text-slate-400
"
>

Delete

<strong
className="text-white"
>

{" "}
{title}

</strong>

?

</p>

<div
className="
flex
justify-end
gap-3
mt-8
"
>

<button

onClick={onClose}

className="
px-5
py-2
rounded-xl
bg-slate-800
text-white
"

>

Cancel

</button>

<button

onClick={onDelete}

className="
px-5
py-2
rounded-xl
bg-red-600
text-white
"

>

Delete

</button>

</div>

</div>

</div>

);

};

export default DeleteDesignModal;