"use client";

import Navbar from "@/components/navbar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import { Edit } from "lucide-react";
import React, { useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { supabase } from "@/lib/supabaseClient";
import { useSession } from "../context/sessionContext";

function ProfilePage() {
  const session = useSession();
  const [activetab, setActiveTab] = React.useState("profile");
  const [profileData, setProfileData] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState("");
  // const [session, setSession] = React.useState(null); // State to hold the session data
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  // const fetchSession = async () => {
  //   const currentSession = await supabase.auth.getSession();
  //   console.log(currentSession);
  //   setSession(currentSession.data.session);
  // };

  // useEffect(() => {
  //   fetchSession();

  //   const { data: authListener } = supabase.auth.onAuthStateChange((_event, session) => {
  //     // setSession(session);
  //   });

  //   return () => {
  //     authListener.subscription.unsubscribe();
  //   };
  // }, []);

  const fetchProfile = async () => {
    if (!session || !session.user) {
      setErrorMsg("No logged-in user.");
      return;
    }

    const { data, error } = await supabase.from("users_info").select("*").eq("id", session.user.id).single();

    if (error) {
      setErrorMsg(error.message);
      console.error("Error fetching user profile:", error);
    } else {
      setProfileData(data);
    }
  };

  useEffect(() => {
    if (session) {
      fetchProfile();
    }
  }, [session]);

  // const fetchProfile = async () => {
  //   if (!session) {
  //     setErrorMsg("No logged-in user.");

  //     return;
  //   }

  //   const { data, error } = await supabase.from("users_info").select("*").eq("id", session.user.id).single();

  //   if (error) {
  //     setErrorMsg(error.message);
  //     console.error("Error fetching user profile:", error);
  //   } else {
  //     setProfileData(data);
  //   }
  // };

  // useEffect(() => {
  //   const { data: authListener } = supabase.auth.onAuthStateChange((_event, newSession) => {
  //     setSession(newSession); // Save session to state
  //     if (newSession) {
  //       fetchProfile(); // Fetch profile data when session is updated
  //     }
  //   });

  //   // If there's already a session when the component mounts, fetch the profile
  //   if (session) {
  //     fetchProfile();
  //   }

  //   return () => {
  //     authListener.subscription.unsubscribe(); // Clean up listener on unmount
  //   };
  // }, [session]);

  console.log("Profile Data:", profileData);
  console.log("Sessionsssss:", session);

  const navItems = ["profile", "settings", "notifications", "Listed Properties"];
  const contents = () => {
    switch (activetab) {
      case "profile":
        return (
          <div>
            <ProfileContent profileData={profileData} session={session} />
          </div>
        );
      case "settings":
        return <div>Settings Content</div>;
      case "notifications":
        return <div>Notifications Content</div>;
      case "Listed Properties":
        return <div>Listed Properties Content</div>;
      default:
        return <div>Profile Content</div>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="px-30 py-10">
        <h1 className="text-2xl font-bold">Account Profile</h1>
        <div className="mt-4 px-15 py-15 pl-10 shadow-md rounded-lg min-h-screen bg-white flex w-full">
          {/* horizontal line */}
          <div className="flex flex-col h-full p-4 border-r-2 border-gray-300 min-h-screen w-64 pl-0">
            {navItems.map((item) => (
              <button key={item} className={`flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 ${activetab === item ? "bg-gray-200" : ""}`} onClick={() => handleTabClick(item)}>
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </button>
            ))}
          </div>

          {/* Vertical Line  */}
          <div className="w-full">
            <div>{contents()}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfilePage;

export function ProfileContent({ profileData, session }) {
  const [currentProfile, setCurrentProfile] = React.useState(null); // State to hold the profile being edited
  const [currentAddress, setCurrentAddress] = React.useState(null); // State to hold the address being edited
  const [isAddressDialogOpen, setIsAddressDialogOpen] = React.useState(false); // State to toggle dialog
  const [isProfileDialogOpen, setIsProfileDialogOpen] = React.useState(false); // State to toggle profile dialog

  const handleEditProfileClick = (profile) => {
    setCurrentProfile(profile); // Set the profile to be edited
    setIsProfileDialogOpen(true); // Switch to edit mode for profile dialog
  };

  const handleProfileSave = (updatedProfile) => {
    // Update the profile data after saving
    const updatedProfiles = (profileData = profileData.id === updatedProfile.id ? updatedProfile : profileData);
    setCurrentProfile(null); // Clear the current profile
    setIsProfileDialogOpen(false); // Close the dialog
  };

  const handleEditAddressClick = (address) => {
    setCurrentAddress(address); // Set the address to be edited
    setIsAddressDialogOpen(true); // Open the dialog
  };

  const handleSaveAddress = async (updatedAddress) => {
    const { error } = await supabase.from("users_info").update(updatedAddress).eq("id", currentAddress.id);

    if (error) {
      console.error("Error updating address:", error);
    } else {
      setIsDialogOpen(false); // Close the dialog
    }
  };

  console.log("Current Session:", session);

  return (
    <>
      {profileData && (
        <div className="flex flex-col h-full ml-10 w-full">
          <h1 className="text-xl font-semibold mt-4">My Profile</h1>
          <div className="flex mt-4 w-full h-50 border border-gray-200 rounded-lg p-4 shadow-md bg-white">
            <div className="flex items-center justify-center">
              <Avatar className="w-30 h-30 mx-4">
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-lg font-medium">{profileData.first_name + " " + profileData.last_name}</p>
              <p className="text-sm text-gray-600">{profileData.email}</p>
            </div>
          </div>
          <div className="flex mt-4 w-full h-auto border border-gray-200 rounded-lg p-4 shadow-md bg-white">
            <div className="flex w-full flex-col">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-lg font-bold">Personal Information</h1>
                <Dialog open={isProfileDialogOpen} onOpenChange={setIsProfileDialogOpen}>
                  <DialogTrigger asChild>
                    <button
                      className="flex p-2 w-24 text-gray-600 border border-gray-600 border-solid rounded-2xl hover:bg-gray-300 items-center justify-center cursor-pointer"
                      onClick={() => handleEditProfileClick(profileData)}
                    >
                      Edit <Edit className="ml-[4px]" />
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Profile Information</DialogTitle>
                    </DialogHeader>
                    <ProfileEditForm session={session} profileData={currentProfile} onSave={handleProfileSave} onCancel={() => setIsProfileDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col mt-4 w-full">
                  <div className="flex flex-col w-full mt-2">
                    <p className="text-lg font-medium">First Name</p>
                    <p className="text-md text-gray-600 mt-2">{profileData.first_name}</p>
                  </div>
                  <div className="flex flex-col w-full mt-6">
                    <p className="text-lg font-medium">Email</p>
                    <p className="text-md text-gray-600 mt-2">{profileData.email}</p>
                  </div>
                  <div className="flex flex-col w-full mt-6">
                    <p className="text-lg font-medium">Role</p>
                    <p className="text-md text-gray-600 mt-2">{profileData.role}</p>
                  </div>
                </div>
                <div className="flex flex-col mt-4 w-full">
                  <div className="flex flex-col w-full mt-2">
                    <p className="text-lg font-medium">Last Name</p>
                    <p className="text-md text-gray-600 mt-2">{profileData.last_name}</p>
                  </div>
                  <div className="flex flex-col w-full mt-6">
                    <p className="text-lg font-medium">Phone Number</p>
                    <p className="text-md text-gray-600 mt-2">{profileData.phone_num}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex mt-4 w-full h-auto border border-gray-200 rounded-lg p-4 shadow-md bg-white">
            <div className="flex w-full flex-col">
              <div className="flex justify-between items-center w-full">
                <h1 className="text-lg font-bold">Address Information</h1>
                <Dialog open={isAddressDialogOpen} onOpenChange={setIsAddressDialogOpen}>
                  <DialogTrigger asChild>
                    <button
                      className="flex p-2 w-24 text-gray-600 border border-gray-600 border-solid rounded-2xl hover:bg-gray-300 items-center justify-center cursor-pointer"
                      onClick={() => handleEditAddressClick(item)}
                    >
                      Edit <Edit className="ml-[4px]" />
                    </button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Edit Address Information</DialogTitle>
                    </DialogHeader>
                    <AddressEditForm addressData={currentAddress} onSave={handleSaveAddress} onCancel={() => setIsAddressDialogOpen(false)} />
                  </DialogContent>
                </Dialog>
              </div>
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div className="flex flex-col mt-4 w-full">
                  <div className="flex flex-col w-full mt-2">
                    <p className="text-lg font-medium">Country</p>
                    <p className="text-md text-gray-600 mt-2">{profileData.country}</p>
                  </div>
                  <div className="flex flex-col w-full mt-6">
                    <p className="text-lg font-medium">Postal Code</p>
                    <p className="text-md text-gray-600 mt-2">{profileData.postal_code}</p>
                  </div>
                </div>
                <div className="flex flex-col mt-4 w-full">
                  <div className="flex flex-col w-full mt-2">
                    <p className="text-lg font-medium">City/State</p>
                    <p className="text-md text-gray-600 mt-2">{profileData.city}</p>
                  </div>
                  <div className="flex flex-col w-full mt-6">
                    <p className="text-lg font-medium">Street</p>
                    <p className="text-md text-gray-600 mt-2">{profileData.street}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function ProfileEditForm({ profileData, onSave, onCancel }) {
  const [formData, setFormData] = React.useState(profileData);
  const [isAlertOpen, setIsAlertOpen] = React.useState(false); // State to toggle the alert dialog
  const [isDialogOpen, setIsDialogOpen] = React.useState(false);
  const [session, setSession] = React.useState(null); // State to hold the session data
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAlertOpen(true); // Open the alert dialog on form submission
  };
  const handleConfirmSave = async () => {
    const { error } = await supabase.from("users_info").update(formData).eq("id", profileData.id).single(); // Update the profile in the database

    if (error) {
      console.error("Error updating profile:", error);
    } else {
      setIsAlertOpen(false); // Close the alert dialog
      setIsDialogOpen(false); // Close the dialog
      onSave(formData); // Pass the updated profile back to the parent
      window.location.reload(); // Reload the page to reflect changes
    }
  };

  useEffect(() => {
    const { data: authListener } = supabase.auth.onAuthStateChange((_event, newSession) => {
      setSession(newSession); // Update session state
    });

    // Fetch initial session
    supabase.auth.getSession().then(({ data, error }) => {
      if (error) console.error("Error getting session:", error);
      else setSession(data.session);
    });

    return () => {
      authListener.subscription.unsubscribe();
    };
  }, [session]);

  const handleUpdateProfile = async (session) => {
    // Optionally update via Supabase client (RLS must allow it)
    const { error: updateError } = await supabase
      .from("users_info")
      .update(formData)
      .eq("email", session.email) // or `profileData.id`
      .single();

    if (updateError) {
      console.error("Error updating profile via supabase client:", updateError);
      return;
    }

    // Optional cleanup
    setIsAlertOpen(false);
    setIsDialogOpen(false);
    onSave(formData);
    window.location.reload();
  };

  console.log("Session in Edit From", session);

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="first_name" value={formData?.first_name || ""} onChange={handleChange} placeholder="First Name" className="border border-gray-300 rounded p-2" />
        <input type="text" name="last_name" value={formData?.last_name || ""} onChange={handleChange} placeholder="Last Name" className="border border-gray-300 rounded p-2" />
        <input type="text" name="phone_num" value={formData?.phone_num || ""} onChange={handleChange} placeholder="Phone Number" className="border border-gray-300 rounded p-2" />
        <input type="text" name="role" value={formData?.role || ""} onChange={handleChange} placeholder="Are you a tenant or a lister?" className="border border-gray-300 rounded p-2" />

        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
          Save
        </button>
        <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded" onClick={onCancel}>
          Cancel
        </button>
      </form>

      {/* Alert Dialog for Confirmation */}
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Submission</AlertDialogTitle>
            <AlertDialogDescription>Are you sure you want to save these changes? This action cannot be undone.</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setIsAlertOpen(false)}>
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleUpdateProfile}>
              Confirm
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

function AddressEditForm({ addressData, onSave, onCancel }) {
  const [formData, setFormData] = React.useState(addressData);
  const [isAlertOpen, setIsAlertOpen] = React.useState(false);
  const [isDialogOpen, setIsDialogOpen] = React.useState(false); // State to toggle dialog

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAlertOpen(true); // Pass the updated address back to the parent
  };
  const handleConfirmSave = async () => {
    await onSave(formData); // Save the updated address
    setIsAlertOpen(false); // Close the alert dialog
    window.location.reload(); // Reload the page to reflect changes
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input type="text" name="country" value={formData?.country || ""} onChange={handleChange} placeholder="Country" className="border border-gray-300 rounded p-2" />
        <input type="text" name="postal_code" value={formData?.postal_code || ""} onChange={handleChange} placeholder="Postal Code" className="border border-gray-300 rounded p-2" />
        <input type="text" name="city" value={formData?.city || ""} onChange={handleChange} placeholder="City/State" className="border border-gray-300 rounded p-2" />
        <input type="text" name="street" value={formData?.street || ""} onChange={handleChange} placeholder="Street" className="border border-gray-300 rounded p-2" />
        <div className="flex gap-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded cursor-pointer">
            Save
          </button>
          <button type="button" className="bg-gray-500 text-white px-4 py-2 rounded cursor-pointer" onClick={onCancel}>
            Cancel
          </button>
        </div>
      </form>
      {/* Alert Dialog for Confirmation */}
      <AlertDialog open={isAlertOpen} onOpenChange={setIsAlertOpen}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Confirm Submission</AlertDialogTitle>
            <AlertDialogDescription>Are you sure you want to save these changes?</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <button className="bg-gray-500 text-white px-4 py-2 rounded" onClick={() => setIsAlertOpen(false)}>
              Cancel
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded" onClick={handleConfirmSave}>
              Confirm
            </button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
