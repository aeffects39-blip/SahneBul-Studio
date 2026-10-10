import { useState } from "react";
import { ScrollView, View, Text, Pressable, TextInput, StyleSheet, Alert } from "react-native";
import { router } from "expo-router";
const C={bg:"#090713",panel:"#151026",border:"#352452",text:"#f5f0ff",muted:"#b4a5cf",purple:"#a855f7"};
export default function DownloadScreen(){
 const [url,setUrl]=useState(""); const [kind,setKind]=useState<"video"|"audio">("video");
 return <ScrollView style={s.screen} contentContainerStyle={s.content}>
  <Pressable onPress={()=>router.back()}><Text style={s.back}>‹  Ana ekrana dön</Text></Pressable>
  <Text style={s.title}>Video indir</Text><Text style={s.sub}>Bağlantıyı ekle, istediğin biçimi seç.</Text>
  <View style={s.card}><Text style={s.label}>VİDEO BAĞLANTISI</Text><TextInput value={url} onChangeText={setUrl} placeholder="https://…" placeholderTextColor="#79698f" autoCapitalize="none" keyboardType="url" style={s.input}/>
   <Text style={s.label}>İNDİRME TÜRÜ</Text><View style={{flexDirection:"row",gap:10}}>
    {(["video","audio"] as const).map(v=><Pressable key={v} onPress={()=>setKind(v)} style={[s.choice,kind===v&&s.choiceActive]}><Text style={{color:C.text,fontWeight:"700"}}>{v==="video"?"🎬 Video":"🎵 Ses"}</Text></Pressable>)}
   </View>
   <Pressable style={s.button} onPress={()=>Alert.alert("Henüz bağlanmadı",url.trim()?"İndirme API'si bağlandığında bu bağlantı işlenecek.":"Önce bir video bağlantısı gir.")}><Text style={s.buttonText}>İndirmeyi başlat  →</Text></Pressable>
  </View>
  <Text style={s.note}>Not: İndirme motoru ve ilerleme takibi henüz API'ye bağlanmadı. Yalnızca indirme hakkına sahip olduğun veya indirilmesine izin verilen içerikleri kullan.</Text>
 </ScrollView>
}
const s=StyleSheet.create({screen:{flex:1,backgroundColor:C.bg},content:{padding:20,paddingTop:30,maxWidth:760,width:"100%",alignSelf:"center"},back:{color:"#d8b4fe",fontSize:14,marginBottom:26},title:{color:C.text,fontSize:30,fontWeight:"900"},sub:{color:C.muted,marginTop:7,marginBottom:24},card:{backgroundColor:C.panel,borderWidth:1,borderColor:C.border,borderRadius:22,padding:18},label:{color:C.muted,fontSize:10,fontWeight:"800",letterSpacing:1.5,marginTop:8,marginBottom:10},input:{backgroundColor:"#0d0918",borderWidth:1,borderColor:C.border,borderRadius:13,padding:15,color:C.text,fontSize:14,marginBottom:20},choice:{flex:1,alignItems:"center",padding:14,borderRadius:13,borderWidth:1,borderColor:C.border,backgroundColor:"#100b1b"},choiceActive:{borderColor:C.purple,backgroundColor:"#29163d"},button:{marginTop:24,backgroundColor:C.purple,padding:16,borderRadius:14,alignItems:"center"},buttonText:{color:"white",fontWeight:"900"},note:{color:C.muted,fontSize:12,lineHeight:19,marginTop:20}});
