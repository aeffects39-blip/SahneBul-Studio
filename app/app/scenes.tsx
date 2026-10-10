import { useState } from "react";
import { ScrollView, View, Text, Pressable, StyleSheet, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as DocumentPicker from "expo-document-picker";
import { router } from "expo-router";
const C={bg:"#090713",panel:"#151026",border:"#352452",text:"#f5f0ff",muted:"#b4a5cf",purple:"#a855f7"};
export default function Scenes(){
 const [photo,setPhoto]=useState(""); const [video,setVideo]=useState("");
 async function pickPhoto(){const r=await ImagePicker.launchImageLibraryAsync({mediaTypes:["images"],quality:0.85});if(!r.canceled)setPhoto(r.assets[0].fileName||"Referans fotoğrafı seçildi");}
 async function pickVideo(){const r=await DocumentPicker.getDocumentAsync({type:["video/*"],copyToCacheDirectory:true});if(!r.canceled)setVideo(r.assets[0].name);}
 return <ScrollView style={s.screen} contentContainerStyle={s.content}>
  <Pressable onPress={()=>router.back()}><Text style={s.back}>‹  Ana ekrana dön</Text></Pressable>
  <Text style={s.title}>Yüzle sahne bul</Text><Text style={s.sub}>Bir referans fotoğrafı ve analiz edilecek video seç.</Text>
  <View style={s.card}><Text style={s.label}>1 · REFERANS FOTOĞRAFI</Text><Pressable style={s.picker} onPress={pickPhoto}><Text style={s.emoji}>🖼️</Text><Text style={s.pickerTitle}>{photo||"Galeriden fotoğraf seç"}</Text><Text style={s.muted}>Yüzün net göründüğü bir fotoğraf önerilir.</Text></Pressable>
   <Text style={s.label}>2 · VİDEO DOSYASI</Text><Pressable style={s.picker} onPress={pickVideo}><Text style={s.emoji}>🎞️</Text><Text style={s.pickerTitle}>{video||"Telefondan video seç"}</Text><Text style={s.muted}>Uzun videoların taranması daha fazla kaynak kullanabilir.</Text></Pressable>
   <Pressable style={s.button} onPress={()=>Alert.alert("Analiz servisi henüz hazır değil",(!photo||!video)?"Devam etmek için fotoğraf ve video seç.":"Dosyalar seçildi. YuNet/SFace analiz motoru bir sonraki aşamada bağlanacak.")}><Text style={s.buttonText}>Sahneleri bul  →</Text></Pressable>
  </View>
  <Text style={s.note}>Fotoğraf ve video seçimi arayüzü hazır. Gerçek yüz eşleştirme, tarama ayarları, ilerleme ve sahne sonuçları henüz bağlanmadı.</Text>
 </ScrollView>
}
const s=StyleSheet.create({screen:{flex:1,backgroundColor:C.bg},content:{padding:20,paddingTop:30,maxWidth:760,width:"100%",alignSelf:"center"},back:{color:"#d8b4fe",fontSize:14,marginBottom:26},title:{color:C.text,fontSize:30,fontWeight:"900"},sub:{color:C.muted,marginTop:7,marginBottom:24},card:{backgroundColor:C.panel,borderWidth:1,borderColor:C.border,borderRadius:22,padding:18},label:{color:C.muted,fontSize:10,fontWeight:"800",letterSpacing:1.5,marginTop:8,marginBottom:10},picker:{borderWidth:1,borderColor:C.border,borderStyle:"dashed",borderRadius:16,padding:18,alignItems:"center",marginBottom:20,backgroundColor:"#100b1b"},emoji:{fontSize:26,marginBottom:9},pickerTitle:{color:C.text,fontSize:14,fontWeight:"800",textAlign:"center",marginBottom:6},muted:{color:C.muted,fontSize:12,textAlign:"center",lineHeight:18},button:{marginTop:4,backgroundColor:C.purple,padding:16,borderRadius:14,alignItems:"center"},buttonText:{color:"white",fontWeight:"900"},note:{color:C.muted,fontSize:12,lineHeight:19,marginTop:20}});
