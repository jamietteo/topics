module type T = sig
  type t
  val t : t
end
let typeof (type t) (t : t) =
  (module struct
    type nonrec t = t
    let t = t
  end : T
    with type t = t)
let one = typeof 1
module One = (val one)
type one = One.t
let one : one = One.t
